import React, { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  chrome?: boolean;
};

export function EelSlap({ className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  
  const currentPosition = useRef(0);
  const targetPosition = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const totalFrames = 93;
  const frameWidth = 640;
  const frameHeight = 480;

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

    const render = () => {
      currentPosition.current += (targetPosition.current - currentPosition.current) / 4;
      
      const canvas = canvasRef.current;
      const ready = isReady;
      if (canvas && ready) {
        const ctx = canvas.getContext('2d', { alpha: false });
        if (ctx) {
          const currentFrameIndex = Math.min(totalFrames - 1, Math.max(0, Math.round((currentPosition.current / frameWidth) * (totalFrames - 1))));
          
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
            ctx.drawImage(
              img,
              frameInImage * frameWidth, 0, frameWidth, frameHeight,
              0, 0, frameWidth, frameHeight
            );
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isReady]);

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    let clientX: number;
    
    if ('touches' in e) {
      const touchEvent = e as React.TouchEvent;
      const touches = touchEvent.touches;
      if (touches && touches.length > 0) {
        const touch = touches[0];
        if (touch) {
          clientX = touch.clientX;
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const relativeX = clientX - rect.left;
    const scaledX = (relativeX / rect.width) * frameWidth;
    targetPosition.current = frameWidth - Math.max(0, Math.min(frameWidth, scaledX));
  };

  return (
    <div 
      className={`relative aspect-[4/3] w-full max-w-[640px] mx-auto overflow-hidden bg-black shadow-2xl rounded-xl border border-white/10 ${className}`}
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      style={{ touchAction: 'none', cursor: 'crosshair' }}
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
        width={frameWidth}
        height={frameHeight}
        className="w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: isReady ? 1 : 0 }}
      />
    </div>
  );
}

export default EelSlap;
