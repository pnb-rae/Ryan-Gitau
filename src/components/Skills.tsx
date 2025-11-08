import { 
  Code2, 
  Palette, 
  Zap, 
  FileCode, 
  Database, 
  Coffee, 
  Cpu, 
  GitBranch, 
  Github 
} from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import InteractiveSkillBar from "./InteractiveSkillBar"

const skills = [
  { name: "HTML5", icon: Code2, category: "Frontend", color: "#E34F26", percentage: 95 },
  { name: "CSS3", icon: Palette, category: "Frontend", color: "#1572B6", percentage: 92 },
  { name: "JavaScript", icon: Zap, category: "Frontend", color: "#F7DF1E", percentage: 90 },
  { name: "React", icon: FileCode, category: "Frontend", color: "#61DAFB", percentage: 88 },
  { name: "Python", icon: Database, category: "Backend", color: "#3776AB", percentage: 85 },
  { name: "Java", icon: Coffee, category: "Backend", color: "#ED8B00", percentage: 80 },
  { name: "Elixir", icon: Cpu, category: "Backend", color: "#4B275F", percentage: 75 },
  { name: "Git", icon: GitBranch, category: "Tools", color: "#F05032", percentage: 93 },
  { name: "GitHub", icon: Github, category: "Tools", color: "#181717", percentage: 90 },
]

const primarySkills = [
  { name: "Frontend Development", percentage: 92 },
  { name: "Backend Development", percentage: 85 },
  { name: "Full Stack Solutions", percentage: 88 },
  { name: "AI Integration", percentage: 82 },
  { name: "DevOps & Deployment", percentage: 78 },
  { name: "Database Design", percentage: 86 },
]

const categories = ["All", "Frontend", "Backend", "Tools"]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build amazing digital experiences
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>
        </ScrollReveal>

        {/* Skill Proficiency Bars */}
        <ScrollReveal delay={200}>
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">Core Competencies</h3>
            <div className="max-w-2xl mx-auto">
              {primarySkills.map((skill, index) => (
                <InteractiveSkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <ScrollReveal delay={400}>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`card-gradient p-6 rounded-xl text-center hover-scale magnetic group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 stagger-${(index % 5) + 1}`}
                >
                  <div className="mb-4">
                    <div className="flex justify-center mb-4">
                      <IconComponent 
                        className="w-12 h-12 transition-all duration-300 group-hover:drop-shadow-lg group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-scramble">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                    
                    {/* Skill progress indicator */}
                    <div className="mt-3">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.percentage}%`,
                            transitionDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Additional Technologies */}
        <ScrollReveal delay={600}>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", 
                "Docker", "AWS", "Firebase", "Tailwind CSS", "Next.js",
                "GraphQL", "Redis", "Kubernetes", "TensorFlow", "OpenAI"
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all cursor-pointer magnetic stagger-${(index % 5) + 1}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}