import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "React & TypeScript", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "Node.js & Express", level: 90, color: "from-green-500 to-emerald-500" },
  { name: "Python & AI/ML", level: 85, color: "from-yellow-500 to-orange-500" },
  { name: "PostgreSQL & Supabase", level: 88, color: "from-purple-500 to-pink-500" },
  { name: "AWS & Cloud Services", level: 82, color: "from-orange-500 to-red-500" },
  { name: "UI/UX Design", level: 87, color: "from-pink-500 to-rose-500" },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentLevel((prev) => {
            if (prev >= skill.level) {
              clearInterval(interval);
              return skill.level;
            }
            return prev + 2;
          });
        }, 20);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-foreground">{skill.name}</span>
        <span className="text-sm font-bold text-primary">{currentLevel}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${currentLevel}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

function CircularSkill({ skill, delay }: { skill: Skill; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentLevel / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentLevel((prev) => {
            if (prev >= skill.level) {
              clearInterval(interval);
              return skill.level;
            }
            return prev + 2;
          });
        }, 20);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-muted"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-primary transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{currentLevel}%</span>
        </div>
      </div>
      <p className="mt-4 font-semibold text-center text-sm">{skill.name}</p>
    </motion.div>
  );
}

export default function SkillsVisualization() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills Proficiency</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My expertise across different technologies and domains
            </p>
          </div>
        </ScrollReveal>

        {/* Progress Bars */}
        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>
        </ScrollReveal>

        {/* Circular Charts */}
        <ScrollReveal delay={200}>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-12 text-center">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {skills.map((skill, index) => (
                <CircularSkill key={`circular-${skill.name}`} skill={skill} delay={index * 100} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
