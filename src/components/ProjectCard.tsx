import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  technologies: string[];
  liveUrl?: string;
  slug: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  category = "Web Development",
  technologies,
  liveUrl,
  slug,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link to={`/projects/${slug}`} className="block h-full">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="card-gradient rounded-2xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-primary/20"
        >
          {/* Image */}
          <div className="relative h-64 overflow-visible flex items-center justify-center bg-muted/30 p-4">
            <motion.img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-70 group-hover:opacity-30 transition-opacity" />
            
            {/* Category Badge */}
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {category}
            </Badge>

            {/* Eyes Icon - View Project Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.15 }}
              className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
            >
              <Icon name="eyes" className="w-6 h-6" alt="View Project" />
            </motion.div>

            {/* Quick View Icon */}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-5 h-5 text-primary" />
              </motion.a>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
              {description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                  +{technologies.length - 3}
                </span>
              )}
            </div>

            {/* View Project Link */}
            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
              View Project
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
