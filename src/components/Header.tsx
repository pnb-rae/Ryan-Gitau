import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useNavigate } from "react-router-dom"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleLogoClick = () => {
    navigate('/')
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center gap-2 sm:gap-3"
            onClick={handleLogoClick}
            role="button"
            aria-label="Home"
          >
            <img 
              src="/uploads/75cd230c-2614-4c07-bfb8-31d0dd597b08.png" 
              alt="Ryan Waweru Logo" 
              className="w-14 h-14 sm:w-20 sm:h-20 transition-all duration-300 hover:scale-105"
              width={80}
              height={80}
              loading="eager"
            />
          </div>

          {/* Desktop Navigation - Right side with Contact & Projects buttons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Button 
              variant="ghost"
              onClick={() => navigate('/contact')}
              className="text-foreground hover:text-primary px-3 py-2 text-sm sm:text-base"
              aria-label="Contact"
            >
              Contact
            </Button>
            <Button 
              variant="ghost"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary px-3 py-2 text-sm sm:text-base"
              aria-label="View Projects"
            >
              Projects
            </Button>
            
            {/* Available Badge */}
            <div className="hidden lg:flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-700 dark:text-green-400 whitespace-nowrap">Available for new projects</span>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-muted w-10 h-10 flex items-center justify-center"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-muted w-10 h-10 flex items-center justify-center"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:bg-muted w-10 h-10 flex items-center justify-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Overlay */}
          <div 
            id="mobile-menu"
            className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 pt-24 px-6 pb-8 md:hidden transition-all duration-300 transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <nav className="flex flex-col space-y-6 h-full">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium hover:text-primary transition-colors py-2 border-b border-border/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 mt-auto">
                <div className="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 w-full max-w-xs mx-auto">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">Available for new projects</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  )
}