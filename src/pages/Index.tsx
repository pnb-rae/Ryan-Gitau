import Preloader from "@/components/Preloader"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Statistics from "@/components/Statistics"
import Projects from "@/components/Projects"
import Testimonials from "@/components/Testimonials"
import Blog from "@/components/Blog"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"
import ChatBot from "@/components/ChatBot"

const Index = () => {
  return (
    <>
      <Preloader />
      <div className="relative">
        <Header />
        <main className="pt-16 md:pt-20">
          <Hero />
          <About />
          <Services />
          <Statistics />
          <Projects />
          <Testimonials />
          <Blog />
          <ContactCTA />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

export default Index;
