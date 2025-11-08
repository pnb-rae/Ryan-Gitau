import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const timelineData = [
  {
    year: "2024",
    title: "Senior Software Engineer",
    organization: "Freelance / Contract Work",
    description: "Leading full-stack development projects, specializing in React, TypeScript, and AI integration for various clients.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2023",
    title: "12 Hackathon Victories",
    organization: "Various Competitions",
    description: "Won multiple hackathons showcasing innovative solutions in web development and AI applications.",
    icon: Award,
    type: "achievement"
  },
  {
    year: "2023-2024",
    title: "Full Stack Developer",
    organization: "Tech Startup",
    description: "Built scalable web applications using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and cloud infrastructure.",
    icon: Code,
    type: "work"
  },
  {
    year: "2022 — 2023",
    title: "Software Development Certificate",
    organization: "ALX Kenya",
    description: "Comprehensive software engineering program covering algorithms, data structures, and full-stack development.",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2021 — 2022",
    title: "Full Stack Software Engineering Certificate",
    organization: "Microverse",
    description: "Intensive remote software development program with focus on collaborative coding and real-world projects.",
    icon: GraduationCap,
    type: "education"
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of my career, education, and major achievements
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden sm:block"></div>

          {timelineData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-12 flex flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"} mb-4 sm:mb-0`}>
                  <div className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <span className="text-primary font-bold text-sm">{item.year}</span>
                    <h3 className="text-xl font-bold mt-2 mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">{item.organization}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-full sm:w-2/12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg ${
                      item.type === "work"
                        ? "bg-primary text-primary-foreground"
                        : item.type === "education"
                        ? "bg-blue-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden sm:block w-5/12"></div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
