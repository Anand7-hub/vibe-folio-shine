import { Github, Linkedin, Mail, MapPin, Phone, Code, Trophy, Briefcase, GraduationCap, Download } from "lucide-react";
import youtubeTrendsImg from "@/assets/youtube-trends-project.jpg";
import powerArmorImg from "@/assets/powerarmor-fitness-project.jpg";
import dematDirectImg from "@/assets/demat-direct-project.jpg";
import blockchainImg from "@/assets/blockchain-achievement.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./ThemeToggle";
import { SkillCard } from "./SkillCard";
import { ProjectCard } from "./ProjectCard";
import { CertificationCard } from "./CertificationCard";
import { ContactForm } from "./ContactForm";
import { useState } from "react";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("projects");

  // Resume data based on the provided information
  const skills = [
    {
      title: "Languages",
      skills: ["C", "C++", "Python", "Java", "Dart", "Kotlin", "JavaScript"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["PyTorch", "OpenCV", "Scikit-Learn", "TensorFlow", "React", "Node.js"]
    },
    {
      title: "Tech Stack",
      skills: ["HTML", "CSS", "React", "Web3", "DApps", "MongoDB"]
    },
    {
      title: "Tools & Cloud",
      skills: ["GitHub", "VS Code", "AWS", "Docker", "Kubernetes", "Android Studio"]
    },
    {
      title: "Expertise",
      skills: ["Computer Vision", "Machine Learning", "Prompt Engineering", "Data Analytics"]
    }
  ];

  const projects = [
    {
      title: "Optimized Predictive Modeling for YouTube Trends",
      description: "Machine learning model to predict YouTube trending content by analyzing user behavior patterns and engagement factors.",
      technologies: ["Python", "Machine Learning", "Data Analytics", "AI"],
      githubUrl: "https://github.com/anandbalaji",
      image: youtubeTrendsImg
    },
    {
      title: "PowerArmor Fitness – AI-Powered Smart Training",
      description: "AI-powered fitness application with intelligent food and workout tracking system, featuring automated progress analysis.",
      technologies: ["AI", "Flutter", "Mobile Development", "Data Analytics"],
      githubUrl: "https://github.com/anandbalaji",
      image: powerArmorImg
    },
    {
      title: "Demat Direct – Smart Investment Portfolio",
      description: "Java-powered investment platform with seamless account management, transaction handling, and dynamic UI transitions.",
      technologies: ["Java", "Investment Platform", "UI/UX", "Backend"],
      githubUrl: "https://github.com/anandbalaji",
      image: dematDirectImg
    }
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "Valeo India",
      period: "May 2024 – Jun 2024",
      description: "Developed AI solutions for automotive applications, focusing on computer vision and machine learning implementations.",
      achievements: [
        "Implemented AI techniques for Sun Glare Impact assessment",
        "Co-authored patent for AI-based sunglare mitigation system",
        "Collaborated with cross-functional teams to streamline IT processes"
      ]
    },
    {
      title: "Head of Sponsorships and Treasurer",
      company: "NWC Association",
      period: "Feb 2024 – Present",
      description: "Leading sponsorship initiatives and financial strategy for the association.",
      achievements: [
        "Secured and managed sponsorships worth significant value",
        "Enhanced financial strategy and provided strategic advice",
        "Fostered long-term relationships for continued support"
      ]
    }
  ];

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2024",
      issuer: "Oracle",
      date: "2024",
      status: "Completed" as const,
      badgeText: "OCI",
      credentialUrl: "https://oracle.com/certificates"
    },
    {
      title: "Full Stack Bootcamp",
      issuer: "Udemy",
      date: "2024",
      status: "Completed" as const,
      badgeText: "FS",
      credentialUrl: "https://udemy.com/certificates"
    }
  ];

  const achievements = [
    {
      title: "🏆 Runner-Up, National Level Blockchain Idea Fest (Jan 2025)",
      description: "Achieved runner-up position in prestigious national competition",
      image: blockchainImg
    },
    {
      title: "🎯 Presented innovative blockchain solutions with real-world applications",
      description: "Showcased practical blockchain implementations for real-world problems",
      image: blockchainImg
    },
    {
      title: "🚀 Developed AI-powered applications with significant user engagement",
      description: "Created AI applications that gained substantial user adoption",
      image: powerArmorImg
    },
    {
      title: "📈 Led cross-functional teams in enterprise-level projects",
      description: "Successfully managed diverse teams in complex enterprise solutions",
      image: dematDirectImg
    }
  ];

  const sections = [
    { id: "projects", label: "Projects", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: GraduationCap },
    { id: "achievements", label: "Achievements", icon: Trophy }
  ];

  return (
    <div className="portfolio-container">
      <ThemeToggle />
      
      {/* Floating decorative elements */}
      <div className="floating-element top-20 left-10 text-6xl">
        <Code className="w-12 h-12 text-primary/20" />
      </div>
      <div className="floating-element top-40 right-20 text-4xl" style={{ animationDelay: "2s" }}>
        <Github className="w-8 h-8 text-accent/30" />
      </div>
      
      <div className="portfolio-split">
        {/* Left Side */}
        <div className="portfolio-left">
          <div className="space-y-8">
            {/* Name and Socials */}
            <div className="opacity-0 animate-fade-in">
              <div className="flex flex-col space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold name-shimmer mb-4">
                    Anand Balaji SN
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    AI Engineer passionate about machine learning and full-stack development
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Button variant="ghost" size="icon" className="social-icon" asChild>
                      <a href="https://github.com/anandbalaji" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="social-icon" asChild>
                      <a href="https://linkedin.com/in/anandbalaji" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="social-icon" asChild>
                      <a href="https://leetcode.com/anandbalaji" target="_blank" rel="noopener noreferrer">
                        <Code className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                  
                  {/* Download Resume Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href="/resume.pdf" download>
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6 mt-12">
              <h2 className="text-2xl font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Skills & Expertise
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

          {/* Contact Form */}
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>

        {/* Right Side */}
        <div className="portfolio-right">
          {/* Navigation */}
          <div className="sticky top-6 z-40 mb-8">
            <div className="flex flex-wrap gap-2 p-2 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content based on active section */}
          <div className="space-y-12">
            {activeSection === "projects" && (
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
                  Featured Projects
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
            )}

            {activeSection === "experience" && (
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <Card 
                      key={exp.title}
                      className="project-card opacity-0 animate-slide-up"
                      style={{ animationDelay: `${200 + index * 150}ms` }}
                    >
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-lg text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {activeSection === "certifications" && (
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
                  Certifications & Learning
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <CertificationCard
                      key={cert.title}
                      {...cert}
                      delay={600 + index * 100}
                    />
                  ))}
                </div>
              </section>
            )}

            {activeSection === "achievements" && (
              <section>
                <h2 className="text-3xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
                  Achievements & Recognition
                </h2>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <Card 
                      key={index}
                      className="project-card opacity-0 animate-slide-up overflow-hidden"
                      style={{ animationDelay: `${1000 + index * 100}ms` }}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 space-y-4">
                          <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                          <p className="text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}