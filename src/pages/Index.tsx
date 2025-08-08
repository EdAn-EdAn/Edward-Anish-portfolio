import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home" className="section-reveal">
          <Hero />
        </section>
        
        <section id="about" className="section-reveal">
          <About />
        </section>
        
        <section id="experience" className="section-reveal">
          <Experience />
        </section>
        
        <section id="projects" className="section-reveal">
          <Projects />
        </section>
        
        <section id="contact" className="section-reveal">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border bg-surface/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Edward Anish. Built with passion for innovation and creativity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
