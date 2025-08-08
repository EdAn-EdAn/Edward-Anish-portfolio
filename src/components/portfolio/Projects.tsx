import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Settings, Music } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "YouTube Channel Management System",
      category: "Music/Animation",
      description: "Managed personal content channel with comprehensive video production workflow. Composed, edited, and produced original music videos using industry-standard tools.",
      features: [
        "Original music composition and production",
        "3D animated visuals using Blender",
        "Video editing with FL Studio and Premiere Pro",
        "Content workflow optimization"
      ],
      technologies: ["FL Studio", "Blender", "Premiere Pro", "Photoshop"],
      icon: Music,
      gradient: "from-accent to-primary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Personal Automation Engine",
      category: "Software Engineering",
      description: "Built and programmed small-scale robots using Python for automation and control. Integrated sensors and actuators for real-time functionality in personal projects.",
      features: [
        "Python-based robot control systems",
        "Sensor integration for real-time data",
        "Automated file organization for workflows",
        "Custom hardware-software interfaces"
      ],
      technologies: ["Python", "Arduino", "Sensors", "Automation"],
      icon: Settings,
      gradient: "from-secondary to-accent",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "CS50 Web Application",
      category: "Full-Stack Development",
      description: "Developed a comprehensive web application as part of Harvard's CS50 course, demonstrating proficiency in full-stack development with modern technologies.",
      features: [
        "Full-stack web application architecture",
        "Database design and management",
        "Front-end development with HTML/CSS",
        "Back-end development with Flask/Python"
      ],
      technologies: ["Python", "Flask", "HTML", "CSS", "Database", "Git"],
      icon: Play,
      gradient: "from-primary to-secondary",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const personalProjects = [
    {
      title: "Aerospace Dynamics Simulation",
      description: "Python-based simulations modeling basic aerospace dynamics for educational purposes",
      tech: ["Python", "Simulation", "Physics"]
    },
    {
      title: "Music Production Workflow Automation",
      description: "Automated file organization system for music production projects",
      tech: ["Python", "File Management", "Workflow"]
    },
    {
      title: "3D Model Library",
      description: "Collection of 3D models and animations created using Blender",
      tech: ["Blender", "3D Modeling", "Animation"]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of technical expertise and creative innovation across software development, 
            automation, and digital content creation.
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`project-card group relative overflow-hidden bg-gradient-to-br from-card to-surface border-card-border hover:border-primary/50 transition-all duration-500 fade-in-up stagger-${index + 1}`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Cursor light effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div 
                  className="absolute w-32 h-32 bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"
                  style={{
                    left: 'var(--mouse-x, 50%)',
                    top: 'var(--mouse-y, 50%)',
                  }}
                ></div>
              </div>
              
              {/* Diagonal edge highlight */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div 
                  className="absolute inset-0 bg-gradient-to-bl from-primary/30 via-primary/10 to-transparent"
                  style={{
                    clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'
                  }}
                ></div>
              </div>
              
              <div className="relative p-6 h-full flex flex-col">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-gradient-to-br ${project.gradient} rounded-lg`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs mb-1">
                        {project.category}
                      </Badge>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

              </div>
            </Card>
          ))}
        </div>

        {/* Personal Projects Section */}
        <div className="fade-in-up stagger-4">
          <h3 className="text-2xl font-semibold mb-8 text-center">Additional Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <Card 
                key={index}
                className="project-card p-4 bg-gradient-to-br from-surface to-surface-variant border-card-border hover:border-secondary/50 transition-all duration-300 group relative overflow-hidden"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                {/* Cursor light effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div 
                    className="absolute w-24 h-24 bg-gradient-radial from-secondary/20 via-secondary/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-lg"
                    style={{
                      left: 'var(--mouse-x, 50%)',
                      top: 'var(--mouse-y, 50%)',
                    }}
                  ></div>
                </div>
                
                {/* Diagonal edge highlight */}
                <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div 
                    className="absolute inset-0 bg-gradient-to-bl from-secondary/30 via-secondary/10 to-transparent"
                    style={{
                      clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'
                    }}
                  ></div>
                </div>
                <div className="relative z-10">
                  <h4 className="font-medium text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;