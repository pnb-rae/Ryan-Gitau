import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FloatingPreviewProps {
  images: Array<{
    src: string;
    alt: string;
    url: string;
  }>;
}

export default function FloatingPreview({ images }: FloatingPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={containerRef} className="relative h-full flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {images.slice(0, 3).map((image, index) => {
          const transforms = [y1, y2, y3];
          const delays = [0, 0.2, 0.4];
          const rotations = [-8, 4, -4];
          const positions = [
            { top: "0%", left: "0%", zIndex: 3 },
            { top: "15%", right: "0%", zIndex: 2 },
            { top: "30%", left: "10%", zIndex: 1 }
          ];

          return (
            <motion.a
              key={index}
              href={image.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute cursor-pointer group"
              style={{
                y: transforms[index],
                ...positions[index]
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: rotations[index] }}
              animate={{ opacity: 1, scale: 1, rotate: rotations[index] }}
              transition={{ 
                duration: 0.6, 
                delay: delays[index],
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="rounded-xl overflow-hidden shadow-2xl border border-border/50"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-64 h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
