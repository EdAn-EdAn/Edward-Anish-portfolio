import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-1 hero-glow rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img 
                src="/lovable-uploads/f810a944-4039-435a-9f92-e7259d55a7a5.png"
                alt="Edward Anish"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-card-border shadow-card"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="fade-in-up stagger-1">
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Edward Anish
              </h1>
              <p className="text-2xl text-muted-foreground mt-2">
                Software Developer & Robotics Enthusiast
              </p>
            </div>

            <div className="fade-in-up stagger-2">
              <p className="text-lg text-muted-foreground max-w-2xl">
                B.Tech Mechanical Engineering student with AI/ML expertise. Passionate about creating 
                innovative solutions through programming, robotics, and automation.
              </p>
            </div>

            <div className="fade-in-up stagger-3 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="default" size="lg" className="hero-glow glow-pulse">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="tech-glow">
                View Projects
              </Button>
            </div>

            <div className="fade-in-up stagger-4 flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/edward-anish" 
                className="p-3 bg-card border border-card-border rounded-xl hover:bg-surface-variant transition-all duration-300 tech-glow group"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
              </a>
              <a 
                href="https://github.com/edward-anish" 
                className="p-3 bg-card border border-card-border rounded-xl hover:bg-surface-variant transition-all duration-300 tech-glow group"
              >
                <Github className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
              </a>
              <a 
                href="tel:+917012424507" 
                className="p-3 bg-card border border-card-border rounded-xl hover:bg-surface-variant transition-all duration-300 tech-glow group"
              >
                <Phone className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;