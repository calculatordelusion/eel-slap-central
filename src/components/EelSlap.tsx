import React, { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

type Props = {
  className?: string;
  chrome?: boolean;
};

export function EelSlap({ className = "", fullPage = false }: Props & { fullPage?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  
  const currentPosition = useRef(0);
  const targetPosition = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const totalFrames = 93;
  const sourceFrameWidth = 320;
  const sourceFrameHeight = 240;

  const frameMap = [24, 23, 24, 23];

  useEffect(() => {
    const imgUrls = [
      "/eelslap_panorama1.jpg",
      "/eelslap_panorama2.jpg",
      "/eelslap_panorama3.jpg",
      "/eelslap_panorama4.jpg"
    ];

    imgUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        imagesRef.current[i] = img;
        setLoadedCount(prev => prev + 1);
      };
    });
  }, []);

  useEffect(() => {
    if (loadedCount === 4) {
      const timer = setTimeout(() => {
        setIsReady(true);
        const isTouch = 'ontouchstart' in window || (navigator.maxTouchPoints > 0);
        if (isTouch) {
          setShowIntro(true);
          const hideTimer = setTimeout(() => setShowIntro(false), 4000);
          return () => clearTimeout(hideTimer);
        }
        return () => {};
      }, 500);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [loadedCount]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Original eelslap.com feels very snappy. 
      // Using a factor of 0.2-0.3 for a more responsive follow.
      // currentPosition += (targetPosition - currentPosition) * factor
      const lerpFactor = 0.6; // Further increased for instant responsiveness
      currentPosition.current += (targetPosition.current - currentPosition.current) * lerpFactor;

      
      const canvas = canvasRef.current;
      const ready = isReady;
      if (canvas && ready) {
        const ctx = canvas.getContext('2d', { alpha: false });
        if (ctx) {
          const currentFrameIndex = Math.min(totalFrames - 1, Math.max(0, Math.round((currentPosition.current / sourceFrameWidth) * (totalFrames - 1))));
          
          let cumulativeFrames = 0;
          let imageIndex = 0;
          let frameInImage = 0;

          for (let i = 0; i < frameMap.length; i++) {
            const count = frameMap[i];
            if (count !== undefined && currentFrameIndex < cumulativeFrames + count) {
              imageIndex = i;
              frameInImage = currentFrameIndex - cumulativeFrames;
              break;
            }
            if (count !== undefined) {
              cumulativeFrames += count;
            }
          }

          const images = imagesRef.current;
          const img = images[imageIndex];
          if (img && img.complete && img.naturalWidth > 0) {
            // Draw into the full canvas size
            ctx.drawImage(
              img,
              frameInImage * sourceFrameWidth, 0, sourceFrameWidth, sourceFrameHeight,
              0, 0, canvas.width, canvas.height
            );
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isReady]);

  useEffect(() => {
    const handleGlobalPointerMove = (e: MouseEvent | TouchEvent) => {
      const container = containerRef.current;
      if (!container || !isReady) return;
      
      const rect = container.getBoundingClientRect();
      let clientX: number;
      
      if ('touches' in e) {
        const touch = (e as TouchEvent).touches[0] || (e as TouchEvent).changedTouches[0];
        if (!touch) return;
        clientX = touch.clientX;
      } else {
        clientX = (e as MouseEvent).clientX;
      }

      // Accurate mapping: we want the horizontal position relative to the container,
      // but tracked GLOBALLY across the entire window.
      const relativeX = (clientX - rect.left) / rect.width;
      
      // Clamp to [0, 1] so it doesn't break at screen edges
      const clampedX = Math.max(0, Math.min(1, relativeX));
      
      // Calculate targetPosition based on sourceFrameWidth (320)
      targetPosition.current = sourceFrameWidth - (clampedX * sourceFrameWidth);
    };

    window.addEventListener('mousemove', handleGlobalPointerMove, { passive: true });
    window.addEventListener('touchmove', handleGlobalPointerMove, { passive: false });
    window.addEventListener('touchstart', handleGlobalPointerMove, { passive: false });

    return () => {
      window.removeEventListener('mousemove', handleGlobalPointerMove);
      window.removeEventListener('touchmove', handleGlobalPointerMove);
      window.removeEventListener('touchstart', handleGlobalPointerMove);
    };
  }, [isReady]);

  const toggleFullScreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };


  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div 
      className={`relative aspect-[4/3] w-full max-w-[800px] mx-auto overflow-hidden bg-black shadow-2xl rounded-xl border border-white/10 ${className} group`}
      ref={containerRef}
      style={{ touchAction: 'none' }}
    >
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black text-white text-4xl font-bold tracking-widest animate-pulse font-sans text-center px-4">
          LOADING...
        </div>
      )}

      {showIntro && (
        <div className="absolute inset-0 flex items-center justify-center z-40 bg-black/40 text-white text-xl text-center px-6 pointer-events-none transition-opacity duration-1000 font-sans">
          Drag horizontally to slap!
        </div>
      )}

      <canvas 
        ref={canvasRef}
        width={sourceFrameWidth * 2}
        height={sourceFrameHeight * 2}
        className="w-full h-full object-contain transition-opacity duration-300"
        style={{ opacity: isReady ? 1 : 0 }}
      />

      {isReady && (
        <button
          onClick={toggleFullScreen}
          className="absolute bottom-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm border border-white/10"
          aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
        >
          {isFullScreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      )}
    </div>
  );
}

export default EelSlap;
