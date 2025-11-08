import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Users, Calendar, Award } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    value: 50,
    label: "Projects Completed",
    suffix: "+"
  },
  {
    icon: Users,
    value: 30,
    label: "Happy Clients",
    suffix: "+"
  },
  {
    icon: Calendar,
    value: 3,
    label: "Years Experience",
    suffix: "+"
  },
  {
    icon: Award,
    value: 15,
    label: "Awards & Recognition",
    suffix: "+"
  }
]

function CountUpAnimation({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </div>
  )
}

export default function Statistics() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Achievements & <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for themselves
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-gradient rounded-2xl p-6 md:p-8 text-center hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <CountUpAnimation value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
