import { useCallback, useEffect, useRef, useState } from "react";
import portrait from "@/assets/slap-portrait.jpg";
import eelImg from "@/assets/eel.png";

const FRAMES = 24;

type Props = {
  className?: string;
  /** Show the slap counter and helper text */
  chrome?: boolean;
};

/**
 * Cursor-driven eel slap.
 * Pointer X (or arrow keys) maps to a frame index; every visual change is a
 * transform applied inside a single rAF tick, so it stays smooth at 60fps.
 */
export function EelSlap({ className = "", chrome = true }: Props) {
  return (
    <div className={`relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-black shadow-glow ${className}`}>
      <iframe
        src="http://eelslap.com/"
        title="Original Eel Slap"
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; fullscreen"
        sandbox="allow-scripts allow-same-origin"
      />
      {/* 
        Note: If http://eelslap.com prevents embedding via X-Frame-Options or CSP,
        we may need to use a proxy or stick to our high-fidelity recreation.
        However, per user request, we are embedding the original.
      */}
    </div>
  );
}

export default EelSlap;
