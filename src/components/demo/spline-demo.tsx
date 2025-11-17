'use client'

import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Box, Move3D, Search, Settings, Sparkles, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <div className="space-y-8">
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
        <div className="absolute inset-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        </div>
        
        <div className="flex h-full flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Interactive 3D
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
              that capture attention and enhance your design.
            </p>
          </div>

          <div className="w-full md:w-1/2 h-64 md:h-full relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<Box className="h-6 w-6" />}
          title="3D Models"
          description="Explore our collection of high-quality 3D models that bring your designs to life."
          color="from-purple-500 to-pink-500"
        />
        <FeatureCard 
          icon={<Move3D className="h-6 w-6" />}
          title="Interactive"
          description="Engage users with interactive 3D elements that respond to their actions."
          color="from-blue-500 to-cyan-400"
        />
        <FeatureCard 
          icon={<Zap className="h-6 w-6" />}
          title="Lightning Fast"
          description="Optimized for performance with smooth animations and quick load times."
          color="from-amber-500 to-yellow-400"
        />
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <GlowingEffect 
      variant={
        color.includes('purple') ? 'secondary' : 
        color.includes('blue') ? 'primary' : 'accent'
      }
      intensity="medium"
      className="h-full"
    >
      <div className="relative h-full p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-white/10 flex flex-col transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10">
        <div className={`w-12 h-12 rounded-lg ${
          color.includes('from-') 
            ? `bg-gradient-to-br ${color}` 
            : 'bg-primary'
        } flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm">{description}</p>
      </div>
    </GlowingEffect>
  )
}
