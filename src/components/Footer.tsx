import { Github, Linkedin, Twitter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                RW
              </div>
              <span className="text-xl font-bold text-gradient">Ryan Waweru</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Full-stack developer and AI enthusiast passionate about building innovative digital solutions 
              that make a meaningful impact.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground block">Email:</span>
                <a href="mailto:ryanwaweru475@gmail.com" className="text-sm hover:text-primary transition-colors">
                  ryanwaweru475@gmail.com
                </a>
              </li>
              <li>
                <span className="text-muted-foreground block">Phone:</span>
                <a href="tel:+254791010693" className="text-sm hover:text-primary transition-colors block">
                  +254 791 010 693
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border/50 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ryan Waweru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}