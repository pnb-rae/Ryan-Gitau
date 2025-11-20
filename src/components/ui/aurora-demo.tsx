'use client';

import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import Aurora from "./aurora";

export function AuroraDemo({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("relative h-[400px] w-full overflow-hidden rounded-xl bg-black/50 p-10", className)}>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          Loading Aurora Effect...
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative h-[400px] w-full overflow-hidden rounded-xl bg-black/50 p-10", className)}>
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Beautiful Aurora Effect
        </h2>
        <p className="max-w-lg text-neutral-300">
          This is a WebGL-powered aurora effect that adds a dynamic, colorful background to your UI.
          It's fully responsive and works across modern browsers.
        </p>
      </div>
    </div>
  );
}
