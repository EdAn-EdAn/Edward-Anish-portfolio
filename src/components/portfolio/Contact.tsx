import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "edward.0.anish@gmail.com",
      href: "mailto:edward.0.anish@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7012424507",
      href: "tel:+917012424507",
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kerala, India",
      href: "#",
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/edward-anish",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/edward-anish",
      color: "text-foreground"
    }
  ];

  const interests = [
    "Aerospace", "Robotics", "Entrepreneurship", "Programming", 
    "Music Production", "Digital Art", "AI/ML", "3D Modeling"
  ];

  return (
    <section className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring innovative ideas to life. Open to opportunities in software development, 
            robotics, and creative technology projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Contact Methods */}
            <div className="fade-in-up stagger-1">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className={`flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl hover:bg-surface-variant transition-all duration-300 group ${
                      method.primary ? 'border-primary/30 bg-primary/5' : ''
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${method.primary ? 'bg-primary/20' : 'bg-muted'}`}>
                      <method.icon className={`w-5 h-5 ${method.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{method.label}</div>
                      <div className={`font-medium ${method.primary ? 'text-primary' : 'text-foreground'}`}>
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="fade-in-up stagger-2">
              <h3 className="text-xl font-semibold mb-4">Social Profiles</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-3 p-4 bg-card border border-card-border rounded-xl hover:bg-surface-variant transition-all duration-300 tech-glow group flex-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="fade-in-up stagger-3">
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="tech-glow">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Main CTA Card */}
          <div className="lg:col-span-2 fade-in-up stagger-2">
            <Card className="p-8 bg-gradient-to-br from-card via-surface to-surface-variant border-card-border relative overflow-hidden">
              
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Ready to Collaborate?
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    I'm actively seeking opportunities to apply my technical and creative skills in 
                    innovative projects. Whether it's software development, robotics automation, 
                    or creative technology solutions, let's build something amazing together.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-xl">
                    <div className="text-2xl font-bold text-secondary">20+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    className="hero-glow glow-pulse group"
                    onClick={() => window.open('https://wa.me/917012424507', '_blank')}
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Preferred for remote work opportunities • Available for immediate start
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;