import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Project Developer (CS50 Web App)",
      company: "HarvardX",
      location: "Remote",
      period: "2025",
      type: "Course Project",
      description: [
        "Developed a full-stack web application using Python scripting, Flask, and databases",
        "Enhanced skills in front-end and back-end development with HTML and CSS",
        "Applied data structures and algorithms in C and Python for optimal solutions"
      ],
      technologies: ["Python", "Flask", "HTML", "CSS", "Database Management"]
    },
    {
      title: "Freelance Digital Content Creator",
      company: "Self-Employed",
      location: "Kerala, India",
      period: "Dec 2019 - Aug 2019",
      type: "Freelance",
      description: [
        "Delivered photo editing, logo design, and video editing services using Photoshop, Canva, Premiere Pro, and Blender for 20+ clients",
        "Created 3D models and animations, ensuring high-quality deliverables within tight deadlines",
        "Enhanced client satisfaction by tailoring designs to meet specific project requirements"
      ],
      technologies: ["Photoshop", "Premiere Pro", "Blender", "Canva", "3D Modeling"]
    },
    {
      title: "Python-Based Personal Projects",
      company: "Personal Development",
      location: "Remote",
      period: "2020 - Present",
      type: "Personal",
      description: [
        "Created Python scripts to automate file organization for music production projects, improving workflow efficiency",
        "Developed simple simulations in Python to model basic robotics or aerospace dynamics for personal learning"
      ],
      technologies: ["Python", "Automation", "Simulation", "File Management"]
    }
  ];

  const achievements = [
    {
      title: "Harvard CS50 Completion",
      year: "2025",
      description: "Introduction to Computer Science"
    },
    {
      title: "Music Theory Certification",
      year: "2019",
      description: "Grade 2 Electric Keyboard Distinction, London Trinity College"
    },
    {
      title: "Academic Excellence",
      year: "2018",
      description: "USS Scholarship for Gifted Students by Government of Kerala"
    }
  ];

  return (
    <section className="py-24 bg-surface/50 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4">
            Experience & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning, practical application, and creative innovation across multiple domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`p-6 bg-gradient-to-r from-card to-surface border-card-border hover:border-secondary/50 transition-all duration-300 fade-in-up stagger-${index + 1}`}
              >
                <div className="flex flex-col space-y-4">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-medium text-secondary">{exp.company}</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="tech-glow text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            <div className="fade-in-up stagger-2">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card 
                    key={index} 
                    className="p-4 bg-gradient-to-br from-card to-surface border-card-border hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 fade-in-up stagger-3">
              <h4 className="text-lg font-semibold mb-2 text-primary">Let's Connect</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in collaboration or have a project in mind?
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="text-primary">edward.0.anish@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="text-primary">+91-7012424507</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;