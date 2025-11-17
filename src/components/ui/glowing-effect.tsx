"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface GlowingEffectProps {
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const GlowingEffect = ({
  variant = 'default',
  intensity = 'medium',
  className,
  disabled = false,
  children,
}: GlowingEffectProps) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const intensityClasses = {
    low: 'opacity-30',
    medium: 'opacity-50',
    high: 'opacity-70',
  };

  const variantClasses = {
    default: 'from-white to-white/20',
    primary: 'from-blue-500 to-blue-300',
    secondary: 'from-purple-500 to-pink-500',
    accent: 'from-amber-400 to-pink-500',
  };

  if (disabled) return <>{children}</>;

  return (
    <div className={cn('relative group', className)}>
      {children}
      <div 
        ref={glowRef}
        className={cn(
          'absolute -inset-0.5 rounded-xl bg-gradient-to-r blur-sm',
          variantClasses[variant],
          intensityClasses[intensity],
          'group-hover:opacity-100 transition duration-500',
          'pointer-events-none'
        )}
        aria-hidden="true"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export { GlowingEffect };
