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

  // Frame counts per image based on original logic:
  // image1: 24 frames
  // image2: 23 frames
  // image3: 24 frames
  // image4: 23 frames
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
      // Smooth movement
      currentPosition.current += (targetPosition.current - currentPosition.current) / 4;
      
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      
      if (ctx && canvas && isReady) {
        // Map currentPosition (0-640) to frame (0-92)
        const currentFrameIndex = Math.min(totalFrames - 1, Math.max(0, Math.round((currentPosition.current / frameWidth) * (totalFrames - 1))));
        
        // Find which image contains this frame
        let cumulativeFrames = 0;
        let imageIndex = 0;
        let frameInImage = 0;

        for (let i = 0; i < frameMap.length; i++) {
          if (currentFrameIndex < cumulativeFrames + frameMap[i]) {
            imageIndex = i;
            frameInImage = currentFrameIndex - cumulativeFrames;
            break;
          }
          cumulativeFrames += frameMap[i];
        }

        const img = imagesRef.current[imageIndex];
        if (img) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Draw the specific frame from the panorama
          ctx.drawImage(
            img,
            frameInImage * frameWidth, 0, frameWidth, frameHeight, // Source
            0, 0, frameWidth, frameHeight // Destination
          );
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
      const touches = (e as React.TouchEvent).touches;
      if (touches && touches.length > 0) {
        clientX = touches[0].clientX;
      } else {
        return;
      }
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const relativeX = clientX - rect.left;
    const scaledX = (relativeX / rect.width) * frameWidth;
    // targetPosition follows the original logic: it maps 0-640
    // The eel swing direction is inverted relative to movement in the original
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
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black text-white text-4xl font-bold tracking-widest animate-pulse font-sans">
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
        className="w-full h-full object-contain transition-opacity duration-500"
        style={{ opacity: isReady ? 1 : 0 }}
      />
    </div>
  );
}

export default EelSlap;
