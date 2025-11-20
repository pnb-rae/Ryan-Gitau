"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { cn } from "@/lib/utils";

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                             \
     ColorStop currentColor = colors[i];                     \
     bool isInBetween = currentColor.position <= factor;     \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                    \
  ColorStop nextColor = colors[index + 1];                   \
  float range = nextColor.position - currentColor.position;  \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  className?: string;
}

export default function Aurora({
  colorStops = ['#3A29FF', '#FF94B4', '#FF3232'],
  amplitude = 1.0,
  blend = 0.5,
  speed = 0.5,
  className
}: AuroraProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const frameIdRef = useRef<number>();
  const propsRef = useRef({ colorStops, amplitude, blend, speed });
  
  // Update refs when props change
  useEffect(() => {
    propsRef.current = { colorStops, amplitude, blend, speed };
  }, [colorStops, amplitude, blend, speed]);

  useEffect(() => {
    console.log('Aurora effect mounting...');
    
    const container = containerRef.current;
    if (!container) {
      console.error('Container ref is not available');
      return;
    }
    
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    console.log('Container dimensions:', { width, height });
    
    if (width === 0 || height === 0) {
      console.error('Container has zero dimensions');
      return;
    }

    let renderer: Renderer | null = null;
    let gl: WebGLRenderingContext | null = null;
    let geometry: Triangle | null = null;
    let program: Program | null = null;
    let mesh: Mesh | null = null;

    try {
      // Create WebGL renderer
      console.log('Creating WebGL renderer...');
      renderer = new Renderer({
        width,
        height,
        dpr: Math.min(window.devicePixelRatio, 2),
        alpha: true,
        antialias: true
      });
      
      gl = renderer.gl;
      if (!gl) {
        console.error('Failed to get WebGL context');
        return;
      }
      
      console.log('WebGL context created successfully');
      rendererRef.current = renderer;
      
      // Create triangle geometry
      geometry = new Triangle(gl);

      // Create shader program
      program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { 
          value: colorStops.map(hex => {
            const c = new Color(hex);
            return [c.r, c.g, c.b];
          })
        },
        uResolution: { value: [width, height] },
        uBlend: { value: blend }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    container.appendChild(gl.canvas);

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Animation loop
    let frameId: number;
    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);
      const { speed } = propsRef.current;
      program.uniforms.uTime.value = time * 0.001 * speed;
      
      // Update uniforms from props
      program.uniforms.uAmplitude.value = propsRef.current.amplitude;
      program.uniforms.uBlend.value = propsRef.current.blend;
      
      // Update colors if they change
      program.uniforms.uColorStops.value = propsRef.current.colorStops.map(hex => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      });
      
      renderer.render({ scene: mesh });
    };
    
    frameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      console.log('Cleaning up Aurora effect...');
      window.removeEventListener('resize', handleResize);
      
      // Cancel any pending animation frame
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
        frameIdRef.current = undefined;
      }
      
      // Clean up WebGL resources
      if (renderer) {
        const gl = renderer.gl;
        if (gl) {
          // Clean up WebGL resources
          if (program) {
            program.remove();
          }
          if (geometry) {
            geometry.remove();
          }
          if (mesh) {
            mesh.remove();
          }
          
          // Lose the WebGL context
          const loseContextExt = gl.getExtension('WEBGL_lose_context');
          if (loseContextExt) {
            loseContextExt.loseContext();
          }
          
          // Remove canvas from DOM if it exists
          const canvas = gl.canvas;
          if (canvas && canvas.parentNode === container) {
            container.removeChild(canvas);
          }
        }
        
        // Clear the renderer reference
        rendererRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-none",
        className
      )} 
    />
  );
}
