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
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<number | null>(null);
  const lastFrame = useRef(0);
  const [frame, setFrame] = useState(0);
  const [slaps, setSlaps] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = eelImg;
    const p = new Image();
    p.src = portrait;
    let done = 0;
    const mark = () => {
      done += 1;
      if (done >= 2) setReady(true);
    };
    img.onload = mark;
    img.onerror = mark;
    p.onload = mark;
    p.onerror = mark;
    const t = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const commit = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(FRAMES - 1, next));
    if (clamped === lastFrame.current) return;
    // count a slap each time we cross the impact frame
    if (lastFrame.current < 16 && clamped >= 16) setSlaps((s) => s + 1);
    lastFrame.current = clamped;
    setFrame(clamped);
  }, []);

  const schedule = useCallback(
    (next: number) => {
      pendingRef.current = next;
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (pendingRef.current !== null) commit(pendingRef.current);
      });
    },
    [commit],
  );

  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  const onPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    schedule(Math.round(ratio * (FRAMES - 1)));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      schedule(lastFrame.current + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      schedule(lastFrame.current - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      schedule(0);
    } else if (e.key === "End") {
      e.preventDefault();
      schedule(FRAMES - 1);
    }
  };

  const p = frame / (FRAMES - 1);
  // eel travel: starts off to the right, sweeps across the face
  const eelX = 120 - p * 190;
  const eelRot = -28 + p * 62;
  const eelY = -14 + Math.sin(p * Math.PI) * 10;
  const impact = Math.max(0, (p - 0.62) / 0.38);
  const headRot = -impact * 7;
  const headX = -impact * 4;

  return (
    <div className={className}>
      <div
        ref={wrapRef}
        role="slider"
        tabIndex={0}
        aria-label="Eel slap animation. Move left and right, or use arrow keys, to swing the eel."
        aria-valuemin={0}
        aria-valuemax={FRAMES - 1}
        aria-valuenow={frame}
        aria-valuetext={`Frame ${frame + 1} of ${FRAMES}`}
        onPointerMove={onPointer}
        onPointerDown={onPointer}
        onKeyDown={onKeyDown}
        className="relative aspect-square w-full cursor-ew-resize touch-none overflow-hidden rounded-3xl border border-border bg-surface shadow-glow select-none"
      >
        <img
          src={portrait}
          alt="Illustrated portrait of a calm man waiting to be slapped by an eel"
          width={816}
          height={816}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-75 ease-out will-change-transform"
          style={{ transform: `rotate(${headRot}deg) translate3d(${headX}%,0,0) scale(1.04)` }}
          draggable={false}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-primary transition-opacity duration-100"
          style={{ opacity: impact > 0.85 ? 0.18 : 0 }}
        />

        <img
          src={eelImg}
          alt=""
          aria-hidden="true"
          width={1152}
          height={576}
          draggable={false}
          className="pointer-events-none absolute top-1/2 left-1/2 w-[125%] max-w-none will-change-transform"
          style={{
            transform: `translate3d(calc(-50% + ${eelX}%), calc(-50% + ${eelY}%), 0) rotate(${eelRot}deg)`,
          }}
        />

        {!ready && (
          <div className="absolute inset-0 grid place-items-center bg-surface/80">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-border border-t-primary" />
            <span className="sr-only">Loading the eel</span>
          </div>
        )}

        {chrome && (
          <div className="glass pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm">
            <span className="text-muted-foreground">Move to slap · arrow keys work too</span>
            <span className="font-display font-semibold tabular-nums">
              {slaps} slap{slaps === 1 ? "" : "s"}
            </span>
          </div>
        )}
      </div>
      <p className="sr-only" aria-live="polite">
        {slaps} slaps delivered
      </p>
    </div>
  );
}

export default EelSlap;
