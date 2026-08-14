import React, { useState } from "react";

type Props = {
  className?: string;
  /** Show the slap counter and helper text */
  chrome?: boolean;
};

export function EelSlap({ className = "" }: Props) {
  // We use the https version as most modern browsers block mixed content (http inside https)
  return (
    <div className={`relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-black shadow-glow ${className}`}>
      <iframe
        src="https://eelslap.com/"
        title="Original Eel Slap"
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; fullscreen"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}

export default EelSlap;
