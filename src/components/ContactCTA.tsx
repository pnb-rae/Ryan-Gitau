import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
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
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="flex gap-6 h-full items-center"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...projects, ...projects, ...projects].map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              className="flex-shrink-0 w-[300px] h-[200px] rounded-xl overflow-hidden"
            >
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
            <Icon name="eyes" className="w-20 h-20 mx-auto" alt="Let's connect" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-background">
            Let's work together!
          </h2>
          
          <p className="text-xl text-background/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Do you have any ideas you would love to bring to life, whether it is a landing page to drive more sales or a mega system, Reach out. I would love to walk this journey with you
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-10 py-7 rounded-full group text-background font-semibold"
              onClick={handleContact}
            >
              Let's talk
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
