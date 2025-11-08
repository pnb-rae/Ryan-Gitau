import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <Button
        onClick={scrollToTop}
        size="lg"
        className="group relative overflow-hidden rounded-full w-14 h-14 p-0 bg-gradient-to-r from-primary via-primary/90 to-accent hover:from-accent hover:via-primary hover:to-primary transition-all duration-500 border-2 border-primary/20 hover:border-accent/40 shadow-lg hover:shadow-xl hover:shadow-primary/25"
      >
        {/* Futuristic glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
        
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping"></div>
        <div className="absolute inset-2 rounded-full border border-accent/40 animate-pulse"></div>
        
        {/* Arrow icon */}
        <ChevronUp className="relative z-10 w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        
        {/* Hover shimmer effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </Button>
    </div>
  )
}