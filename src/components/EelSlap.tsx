import React, { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  chrome?: boolean;
};

export function EelSlap({ className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const allImagesRef = useRef<HTMLDivElement>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const currentPosition = useRef(0);
  const targetPosition = useRef(0);

  const totalFrames = 93;
  const frameWidth = 640;

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
    const handleUpdate = () => {
      currentPosition.current += (targetPosition.current - currentPosition.current) / 4;
      const currentSlap = (currentPosition.current / frameWidth) * totalFrames;
      const clampedSlap = Math.min(totalFrames, Math.max(0, currentSlap));
      const pos = Math.round(clampedSlap) * -frameWidth;

      if (allImagesRef.current) {
        allImagesRef.current.style.left = `${pos}px`;
      }
    };

    const interval = setInterval(handleUpdate, 30);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let clientX: number;
    
    if ('touches' in e) {
      const touchEvent = e as React.TouchEvent;
      if (touchEvent.touches && touchEvent.touches.length > 0) {
        clientX = touchEvent.touches[0].clientX;
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

  const imageLoaded = () => {
    setLoadedCount(prev => prev + 1);
  };

  return (
    <div 
      className={`relative aspect-[4/3] w-full max-w-[640px] mx-auto overflow-hidden bg-black shadow-2xl rounded-xl border border-white/10 ${className}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      style={{ touchAction: 'none' }}
    >
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black text-white text-4xl font-bold tracking-widest animate-pulse font-sans">
          LOADING...
        </div>
      )}

      {showIntro && (
        <div className="absolute inset-0 flex items-center justify-center z-40 bg-black/40 text-white text-xl text-center px-6 pointer-events-none transition-opacity duration-1000 font-sans">
          Drag your finger across the screen to slap!
        </div>
      )}

      <div 
        ref={allImagesRef}
        className="absolute top-0 flex transition-opacity duration-[3000ms]"
        style={{ 
          opacity: isReady ? 1 : 0,
          height: '100%',
          display: isReady ? 'flex' : 'none'
        }}
      >
        <img 
          src="/eelslap_panorama1.jpg" 
          onLoad={imageLoaded}
          className="h-full w-auto max-w-none"
          alt=""
        />
        <img 
          src="/eelslap_panorama2.jpg" 
          onLoad={imageLoaded}
          className="h-full w-auto max-w-none"
          alt=""
        />
        <img 
          src="/eelslap_panorama3.jpg" 
          onLoad={imageLoaded}
          className="h-full w-auto max-w-none"
          alt=""
        />
        <img 
          src="/eelslap_panorama4.jpg" 
          onLoad={imageLoaded}
          className="h-full w-auto max-w-none"
          alt=""
        />
      </div>
    </div>
  );
}

export default EelSlap;
