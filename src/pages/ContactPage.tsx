import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      
      <main className="pt-24 md:pt-28">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
