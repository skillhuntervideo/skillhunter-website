"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl lg:max-w-[calc(100%-0.5rem)]">
      {playing ? (
        <video
          src="/videos/hero-promo.mp4"
          controls
          autoPlay
          playsInline
          className="h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group block h-full w-full cursor-pointer"
          aria-label="動画を再生 — Play video"
        >
          <img
            src="/images/hero-video-poster.jpg"
            alt="Skill Hunter promotion video"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
            <span className="flex size-16 items-center justify-center rounded-full bg-[#c9a03c] text-[#1a1a2e] shadow-lg transition-transform group-hover:scale-110">
              <Play className="size-7 translate-x-0.5" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
