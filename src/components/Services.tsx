import { Rocket, Code2, Search } from "lucide-react"
import { motion } from "framer-motion"

const skillsData = {
  languages: [
    "Elixir",
    "Phoenix Live View",
    "Tailwind CSS",
    "React JS",
    "Javascript"
  ],
  skills: [
    "Full-Stack Development",
    "Real-Time Applications",
    "API Development",
    "Database Design",
    "Performance Optimization"
  ],
  expertise: [
    "Scalable Web Apps",
    "AI Integration",
    "MVP Development",
    "Performance Optimization",
    "Tech Mentorship"
  ]
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Explore my services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Languages Card */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-10 shadow-md hover:shadow-lg hover:bg-foreground hover:text-background transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold">Languages</h3>
            </div>
            <ul className="space-y-3">
              {skillsData.languages.map((lang, index) => (
                <li key={index} className="text-muted-foreground">
                  {lang}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-10 shadow-md hover:shadow-lg hover:bg-foreground hover:text-background transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center">
                <Code2 className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>
            <ul className="space-y-3">
              {skillsData.skills.map((skill, index) => (
                <li key={index} className="text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Expertise Card */}
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-10 shadow-md hover:shadow-lg hover:bg-foreground hover:text-background transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center">
                <Search className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">Expertise</h3>
            </div>
            <ul className="space-y-3">
              {skillsData.expertise.map((exp, index) => (
                <li key={index} className="text-muted-foreground">
                  {exp}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}