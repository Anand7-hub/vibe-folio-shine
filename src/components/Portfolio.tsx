import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./ThemeToggle";
import { SkillCard } from "./SkillCard";
import { ProjectCard } from "./ProjectCard";
import { CertificationCard } from "./CertificationCard";

export function Portfolio() {
  // Sample data - replace with your actual data
  const skills = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
      githubUrl: "https://github.com/yourusername/taskapp",
      liveUrl: "https://your-taskapp.com"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard displaying weather patterns and analytics with interactive charts and forecasting.",
      technologies: ["React", "D3.js", "Python", "Flask", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather-dashboard"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "Dec 2023",
      status: "Completed" as const
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "Jan 2024",
      status: "In Progress" as const
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      date: "Nov 2023",
      status: "Completed" as const
    }
  ];

  const achievements = [
    "🏆 Winner of HackXYZ 2023 - Best Innovation Award",
    "🎯 Contributed to 15+ open source projects with 500+ stars",
    "📈 Led development team of 5 developers on enterprise project",
    "🚀 Optimized application performance by 40% reducing load times"
  ];

  return (
    <div className="portfolio-container">
      <ThemeToggle />
      
      <div className="portfolio-split">
        {/* Left Side */}
        <div className="portfolio-left">
          <div className="space-y-8">
            {/* Name and Socials */}
            <div className="opacity-0 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Your Name
                </h1>
                <div className="flex space-x-3">
                  <Button variant="ghost" size="icon" className="social-icon" asChild>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="social-icon" asChild>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="social-icon" asChild>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-xl text-muted-foreground">
                Vibe Coder & Full-Stack Developer passionate about creating digital experiences
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <SkillCard
                    key={skillGroup.title}
                    title={skillGroup.title}
                    skills={skillGroup.skills}
                    delay={300 + index * 100}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <h2 className="text-2xl font-bold text-foreground">Contact Me</h2>
            <Card className="p-4 bg-secondary/20">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>New York, NY</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Side */}
        <div className="portfolio-right space-y-12">
          {/* Projects */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  delay={200 + index * 150}
                />
              ))}
            </div>
          </section>

          <Separator />

          {/* Certifications */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Certifications
            </h2>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert.title}
                  {...cert}
                  delay={600 + index * 100}
                />
              ))}
            </div>
          </section>

          <Separator />

          {/* Achievements */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
              Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="p-4 border-l-4 border-l-primary bg-secondary/20 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <p className="text-foreground">{achievement}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}