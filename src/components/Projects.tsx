import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projectsData"
import ProjectCard from "./ProjectCard"
import ScrollReveal from "./ScrollReveal"
import ProjectSkeleton from "./ProjectSkeleton"
import { useState, useEffect, useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = useIsMobile();
  
  return (
    <section ref={ref} id="projects" className="py-12 sm:py-20 relative overflow-hidden">
      {/* Parallax Background elements */}
      <motion.div 
        style={{ y }}
        className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              A showcase of my latest work and creative solutions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {[...Array(6)].map((_, i) => (
                <ProjectSkeleton key={i} />
              ))}
            </div>
          ) : isMobile ? (
            <div className="px-2">
              <Carousel
                opts={{
                  align: "start",
                  containScroll: "trimSnaps",
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-1">
                  {projects.map((project, index) => (
                    <CarouselItem key={project.slug} className="pl-4 basis-1/1.5">
                      <div className="p-1">
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          image={project.image}
                          category={project.category}
                          technologies={project.technologies}
                          liveUrl={project.liveUrl}
                          slug={project.slug}
                          index={index}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  slug={project.slug}
                  index={index}
                />
              ))}
            </div>
          )}
        </ScrollReveal>

        {/* View All Projects Button */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="btn-glow bg-primary hover:bg-primary/90 morph-button group"
              onClick={() => window.open('https://github.com/pnb-rae', '_blank')}
            >
              <span className="group-hover:tracking-wider transition-all duration-300">
                View All Projects
              </span>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}