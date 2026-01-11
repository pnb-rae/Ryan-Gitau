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
    <section ref={ref} id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Parallax background decoration */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"
      />
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="flex items-center gap-3">
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
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
                  className="flex-shrink-0"
                >
                  <Icon name="wave-hand" className="w-8 h-8 sm:w-10 sm:h-10" alt="Waving hand" />
                </motion.div>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                A Senior <span className="text-primary">Software</span> Engineer
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I am a passionate full-stack developer on a mission to transform business ideas into powerful web applications and AI Systems. With a proven track record of 12 hackathon victories and an insatiable drive for innovative solutions, I embark on a journey to weave technical excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-all text-sm sm:text-base px-5 h-12 sm:h-14"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Contact me"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Contact
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="h-12 sm:h-14 text-sm sm:text-base px-5"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="View my projects"
              >
                View Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost"
                className="backdrop-blur-md bg-background/30 border border-border/50 hover:bg-background/50 transition-all shadow-lg h-12 sm:h-14 text-sm sm:text-base px-5"
                asChild
              >
                <a 
                  href="/Ryan_Gitau_Waweru_CV.pdf" 
                  download="Ryan_Waweru_Resume.pdf"
                  aria-label="Download resume"
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Resume
                </a>
              </Button>
            </div>

          </motion.div>

          {/* Hero Photo */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto lg:mx-0 mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative z-10 aspect-square rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl sm:shadow-2xl">
              <img
                src={ryanHero}
                alt="Ryan Waweru"
                className="w-full h-full object-cover"
                width={600}
                height={600}
                loading="eager"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay" />
              
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-xl sm:rounded-2xl animate-pulse-slow" />
            </div>
            
            {/* Floating elements - Only show on larger screens */}
            <div className="hidden sm:block">
              {projects.slice(0, 3).map((project, index) => {
                const positions = [
                  { top: '-10%', left: '10%' },
                  { top: '70%', left: '-5%' },
                  { top: '80%', left: '80%' }
                ];
                
                return (
                  <motion.div
                    key={project.slug}
                    className="absolute z-20 bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-border/20"
                    style={positions[index]}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      rotate: [0, 10, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + (index * 0.15),
                      rotate: {
                        repeat: Infinity,
                        duration: 10,
                        ease: "easeInOut",
                        repeatType: "reverse"
                      }
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-md overflow-hidden bg-muted">
                        {project.image && (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                            width={32}
                            height={32}
                            loading="lazy"
                          />
                        )}
                      </div>
                      <span className="text-xs font-medium whitespace-nowrap">{project.title}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Mobile project badges - Only show on small screens */}
            <div className="sm:hidden flex flex-wrap justify-center gap-3 mt-6">
              {projects.slice(0, 3).map((project) => (
                <div 
                  key={project.slug} 
                  className="bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow border border-border/20 flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-md overflow-hidden bg-muted">
                    {project.image && (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <span className="text-xs font-medium">{project.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Sliding Project Gallery with Fade Effects */}
        <div className="relative overflow-hidden py-8 sm:py-12">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex items-center"
            style={{
              width: 'max-content',
              padding: '0 50%', // Add padding to center the first set of images
            }}
            animate={{
              x: ['0%', '-50.5%'], // Adjusted to account for the gap
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 180,
                ease: "linear",
              },
            }}
          >
            <div className="flex gap-6">
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
              {/* Add an empty div to create a gap */}
              <div className="w-[100px] flex-shrink-0"></div>
            </div>
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