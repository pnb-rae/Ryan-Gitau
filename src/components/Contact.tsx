import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import ScrollReveal from "./ScrollReveal"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useNavigate } from "react-router-dom"
export default function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with EmailJS or your backend API
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    })
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Button
              variant="outline"
              onClick={() => navigate('/#projects')}
              className="mb-6 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              {/* Desktop Workspace Image */}
              <AspectRatio
                ratio={16/9}
                className="w-full rounded-2xl overflow-hidden shadow-lg hover-scale magnetic mb-6"
              >
                <img 
                  src="/lovable-uploads/e0f9f459-76a6-47aa-97e8-e47d2ba31508.png" 
                  alt="Modern workspace with Apple iMac, coffee, and notebook" 
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                  style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                />
              </AspectRatio>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-scramble">Let's talk about your project</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you need a full-stack application, AI integration, or technical consulting, 
                  I'm here to help bring your vision to reality.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 card-gradient rounded-xl hover-scale magnetic group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">ryanwaweru475@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 card-gradient rounded-xl hover-scale magnetic group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+254791010693</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 card-gradient rounded-xl hover-scale magnetic group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow me on social media</h4>
                <div className="flex gap-4 flex-wrap">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 magnetic group"
                    onClick={() => window.open('https://github.com/pnb-rae', '_blank')}
                  >
                    <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 magnetic group"
                    onClick={() => window.open('https://www.linkedin.com/in/ryan-waweru/', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 magnetic group"
                    onClick={() => window.open('https://x.com/PnbRae?t=AdRGGHiqU2ChylDD5tPTvQ&s=09', '_blank')}
                  >
                    <Twitter className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 magnetic group"
                    onClick={() => window.open('https://www.instagram.com/pnb_rae?igsh=MWsyaTR1bml2NmM3eQ==', '_blank')}
                  >
                    <Instagram className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 magnetic group"
                    onClick={() => window.open('https://wa.me/254791010693', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 group-hover:bounce transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={400}>
            <div className="card-gradient p-8 rounded-2xl glass-effect w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 hover:border-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none transition-all duration-300 hover:border-primary/50"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-glow bg-primary hover:bg-primary/90 morph-button group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}