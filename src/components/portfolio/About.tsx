import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Music, Cog } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in Python, web technologies, and database management with hands-on project experience."
    },
    {
      icon: Cog,
      title: "Robotics & Automation", 
      description: "Built and programmed small-scale robots with sensor integration for real-time functionality."
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Minor in AI/ML with experience in data preprocessing, analysis, and algorithm implementation."
    },
    {
      icon: Music,
      title: "Creative Production",
      description: "Multi-talented in music production, video editing, and 3D modeling with professional certifications."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aspiring Software Developer, Robotics & Automation and AI Enthusiast with a passion for 
            creating innovative solutions and exploring the intersection of technology and creativity.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Story */}
          <div className="space-y-6 fade-in-up stagger-1">
            <Card className="p-8 bg-gradient-to-br from-card to-surface border-card-border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Currently pursuing B.Tech in Mechanical Engineering with a minor in Artificial Intelligence 
                  and Machine Learning at VIT, Vellore. My passion lies in bridging the gap between 
                  theoretical knowledge and practical innovation.
                </p>
                <p>
                  From completing Harvard's CS50 course to managing a YouTube channel with 20+ clients, 
                  I've demonstrated versatility in both technical and creative domains. My experience 
                  spans from software development to robotics projects and digital content creation.
                </p>
                <p>
                  I'm seeking opportunities to apply my technical and creative skills in innovative 
                  projects, with a preference for remote work that allows me to contribute to 
                  cutting-edge technologies.
                </p>
              </div>
            </Card>

            {/* Skills Tags */}
            <div className="fade-in-up stagger-2">
              <h4 className="text-lg font-medium mb-3">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "HTML/CSS", "JavaScript", "MATLAB", "Blender", "FL Studio", "Fusion 360", "Microsoft Suite", "Data Analysis"].map((skill, index) => (
                  <Badge key={index} variant="secondary" className="tech-glow">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-gradient-to-br from-card to-surface border-card-border hover:border-primary/50 transition-all duration-300 group fade-in-up stagger-${index + 1}`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;