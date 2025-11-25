import { Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { projects } from "@/data/projectsData"
import Icon from "@/components/ui/icon"
import ryanHero from "@/assets/ryan-hero-suit.jpg"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-center relative overflow-hidden bg-background">
      {/* Parallax background decoration */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-grid-pattern opacity-[0.02]"
      />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 lg:space-y-6">
              <div className="flex items-center gap-3">
                <p className="text-muted-foreground text-base sm:text-lg">
                  Hi, I'm Ryan Waweru
                </p>
                <motion.div
                  animate={{ 
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                >
                  <Icon name="wave-hand" className="w-8 h-8 sm:w-10 sm:h-10" alt="Waving hand" />
                </motion.div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                A Senior Software Engineer
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                I am a passionate full-stack developer on a mission to transform business ideas into powerful web applications and AI Systems. With a proven track record of 12 hackathon victories and an insatiable drive for innovative solutions, I embark on a journey to weave technical excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-all"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost"
                className="backdrop-blur-md bg-background/30 border border-border/50 hover:bg-background/50 transition-all shadow-lg"
                asChild
              >
                <a href="/Ryan_Gitau_Waweru_CV.pdf" download="Ryan_Waweru_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>

          </motion.div>

          {/* Hero Photo */}
          <motion.img 
            src={ryanHero} 
            alt="Ryan Waweru - Senior Software Engineer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-3/4 max-w-sm lg:max-w-md mx-auto h-auto rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Sliding Project Gallery with Fade Effects */}
        <div className="relative overflow-hidden py-8 sm:py-12">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-6 items-center"
            style={{
              width: 'max-content',
              padding: '0 50%', // Add padding to center the first 3 images
            }}
            animate={{
              x: ['0%', '-100%'], // Move by 100% of container width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Slightly faster to compensate for more images
                ease: "linear",
              },
            }}
          >
            {[...projects, ...projects].filter(project => project.featured).map((project, index) => (
              <motion.div 
                key={`${project.slug}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[180px] sm:max-h-[250px] md:max-h-[280px] lg:max-h-[300px] object-contain rounded-lg shadow-md bg-muted/30 p-2"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Follow my work on section */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">Follow my work on:</p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/ryan-waweru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                Linkedin
              </a>
              <a 
                href="https://x.com/PnbRae?t=AdRGGHiqU2ChylDD5tPTvQ&s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                X
              </a>
              <a 
                href="https://github.com/pnb-rae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                Github
              </a>
              <a 
                href="https://www.instagram.com/pnb_rae?igsh=MWsyaTR1bml2NmM3eQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}