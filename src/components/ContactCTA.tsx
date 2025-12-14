import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projectsData";

export default function ContactCTA() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground to-foreground/90" />
      
      {/* Moving Projects Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {/* Top row - moving right to left */}
        <motion.div 
          className="flex gap-8 py-4"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div key={`top-${index}`} className="flex-shrink-0 w-48 h-32 md:w-64 md:h-40 rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Middle row - moving left to right */}
        <motion.div 
          className="flex gap-8 py-4 justify-end"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...projects].reverse().map((project, index) => (
            <div key={`middle-${index}`} className="flex-shrink-0 w-40 h-28 md:w-56 md:h-36 rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom row - moving right to left */}
        <motion.div 
          className="flex gap-8 py-4"
          animate={{ x: ['-60%', '0%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div key={`bottom-${index}`} className="flex-shrink-0 w-36 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyes Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="text-6xl">👀</div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
            Let's work together!
          </h2>
          
          <p className="text-lg text-background/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Do you have any ideas you would love to bring to life, whether it is a landing page to drive more sales or a mega system, Reach out. I would love to walk this journey with you
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              onClick={handleContact}
              className="group bg-primary hover:bg-primary/90 text-background text-base px-6 py-5 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Let's talk
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
