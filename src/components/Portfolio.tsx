import { Github, Linkedin, Mail, Code, Trophy, Briefcase, GraduationCap, Download } from "lucide-react";
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
      title: "Programming Languages",
      skills: ["Java", "Python", "C++", "C"]
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "GCP"]
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "U-Net", "XGBoost", "LangChain", "RAG", "Generative AI"]
    },
    {
      title: "DevOps Tools",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD", "Git"]
    },
    {
      title: "Web Development",
      skills: ["React", "Tailwind", "Firebase", "Node.js"]
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB"]
    }
  ];

  const projects = [
    {
      title: "Optimized Predictive Modeling for YouTube Trends Using Machine Learning",
      description: "Presented a research paper on a machine learning-based YouTube trend prediction system at ICIOT 2025, SRM Institute.",
      technologies: ["Python", "Machine Learning", "Research", "Data Analytics"],
      githubUrl: "https://github.com/Anand7-hub/YouTube-Trends-ML",
      image: youtubeTrendsImg
    },
    {
      title: "TripMate AI",
      description: "React Native mobile app for AI-powered trip planning with personalized itineraries, real-time tracking, and RAG-based chatbot using LangChain and Gemini API.",
      technologies: ["React Native", "LangChain", "Gemini API", "RAG"],
      githubUrl: "https://github.com/Anand7-hub/TripMate-AI",
      image: powerArmorImg
    },
    {
      title: "MedTechPro",
      description: "Predictive maintenance platform for healthcare equipment (MRI, CT) using AWS S3, Kinesis, Azure XGBoost with scalable microservices and ML pipelines.",
      technologies: ["AWS", "Azure", "XGBoost", "Microservices"],
      githubUrl: "https://github.com/Anand7-hub/MedTechPro",
      image: dematDirectImg
    },
    {
      title: "Arena Control Panel",
      description: "Web-based dashboard for managing, monitoring, and controlling activities within an arena environment with responsive UI and fast performance.",
      technologies: ["TypeScript", "React", "Dashboard", "Real-time"],
      githubUrl: "https://github.com/Anand7-hub/arena-control-panel",
      image: blockchainImg
    },
    {
      title: "SmartCampusParking",
      description: "Automated parking management system for university campuses with real-time space monitoring, reservation, and location tracking to reduce congestion.",
      technologies: ["TypeScript", "IoT", "Real-time", "Automation"],
      githubUrl: "https://github.com/Anand7-hub/SmartCampusParking",
      image: youtubeTrendsImg
    },
    {
      title: "AI PR Review Agent",
      description: "AI-powered Pull Request management tool combining traditional PR workflows with intelligent automation for code review and analysis.",
      technologies: ["Python", "AI", "GitHub API", "Automation"],
      githubUrl: "https://github.com/Anand7-hub/PR-Pull-Request-Review-Agent---Codemate-Hackathon",
      image: powerArmorImg
    },
    {
      title: "Disease Detection Using ML",
      description: "Machine learning system for detecting plant diseases from leaf images with high accuracy image classification and diagnosis.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "ML"],
      githubUrl: "https://github.com/Anand7-hub/Disease-Detection-Based-on-Leaf-image-Using-machine-learning",
      image: dematDirectImg
    }
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "VALEO",
      period: "May–June 2024",
      description: "Worked on ADAS glare mitigation system using U-Net-based semantic segmentation to improve image clarity and object detection.",
      achievements: [
        "Developed U-Net-based semantic segmentation for glare mitigation",
        "Performed end-to-end testing identifying performance issues",
        "Reduced image error rates by 20% through optimized model validation"
      ]
    },
    {
      title: "AWS Cloud Virtual Intern",
      company: "AICTE",
      period: "Jan–Mar 2025",
      description: "Gained hands-on experience with AWS and DevOps tools for scalable cloud solutions and automation.",
      achievements: [
        "Worked with AWS services (EC2, S3, Lambda)",
        "Learned DevOps tools for cloud automation",
        "Built scalable cloud solutions"
      ]
    },
    {
      title: "The Consultant",
      company: "NWC Association",
      period: "Nov 2024–Present",
      description: "Leading team management and organizational initiatives for technical events.",
      achievements: [
        "Led a team of 30 members organizing 7 major technical events",
        "Managed 500+ participants across multiple events",
        "Implemented digital documentation reducing admin time by 40%"
      ]
    }
  ];

  const certifications = [
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      date: "2024",
      status: "Completed" as const,
      badgeText: "OCI",
      image: blockchainImg
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Data Certified Foundations Associate",
      issuer: "Oracle",
      date: "2024",
      status: "Completed" as const,
      badgeText: "OCI",
      image: blockchainImg
    },
    {
      title: "Google Data Analytics Certification",
      issuer: "Google",
      date: "2024",
      status: "Completed" as const,
      badgeText: "GDA",
      image: blockchainImg
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS",
      date: "2024",
      status: "Completed" as const,
      badgeText: "AWS",
      image: blockchainImg
    },
    {
      title: "AWS Machine Learning Foundations",
      issuer: "AWS",
      date: "2024",
      status: "Completed" as const,
      badgeText: "AWS",
      image: blockchainImg
    }
  ];

  const achievements = [
    {
      title: "Runner-Up, National Level Blockchain Idea Fest",
      description: "Achieved runner-up position in prestigious national blockchain competition (Jan 2025)",
      image: blockchainImg
    },
    {
      title: "Second Runner-Up, Mastering Cloud Services Project Expo",
      description: "Secured second runner-up position showcasing cloud computing expertise (May 2025)",
      image: powerArmorImg
    },
    {
      title: "Research Paper Presentation at ICIOT 2025",
      description: "Presented research paper on YouTube Trends ML model at International Conference on IoT",
      image: youtubeTrendsImg
    },
    {
      title: "Multi-Cloud Certifications Achievement",
      description: "Earned certifications across Oracle Cloud, AWS, and Google Cloud platforms",
      image: dematDirectImg
    }
  ];

  const sections = [
    { id: "projects", label: "Projects", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: GraduationCap },
    { id: "achievements", label: "Achievements", icon: Trophy }
  ];

  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "SRM Institute of Science and Technology, Chennai",
      period: "2022–2026"
    }
  ];

  return (
    <div className="portfolio-container">
      <ThemeToggle />
      
      <div className="portfolio-split">
        {/* Left Side */}
        <div className="portfolio-left border-r border-border">
          <div className="space-y-5">
            {/* Name and Socials */}
            <div className="opacity-0 animate-fade-in">
              <div className="flex flex-col space-y-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold name-shimmer mb-1 leading-tight">
                    Anand Balaji S N
                  </h1>
                  <p className="text-sm lg:text-base text-muted-foreground mb-4">
                    Cloud-Native AI/ML Engineer | DevOps Enthusiast
                  </p>
                  
                  {/* Social Links & Resume */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Button variant="ghost" size="sm" className="social-icon h-8 w-8 p-0" asChild>
                      <a href="https://github.com/Anand7-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="social-icon h-8 w-8 p-0" asChild>
                      <a href="https://linkedin.com/in/anand-balaji-s-n" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="social-icon h-8 w-8 p-0" asChild>
                      <a href="mailto:snanandbalaji07@gmail.com" aria-label="Email">
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/30 hover:bg-primary/10 gap-1.5 h-8 text-xs"
                      asChild
                    >
                      <a href="/resume.pdf" download>
                        <Download className="w-3 h-3" />
                        Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
                Education
              </h2>
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="p-3 bg-card/80 border border-primary/20 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <h3 className="text-sm font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-xs text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-primary">{edu.period}</p>
                </Card>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-foreground opacity-0 animate-fade-in" style={{ animationDelay: "250ms" }}>
                Skills
              </h2>
              <div className="space-y-2">
                {skills.map((skillGroup, index) => (
                  <SkillCard
                    key={skillGroup.title}
                    title={skillGroup.title}
                    skills={skillGroup.skills}
                    delay={300 + index * 50}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        {/* Right Side */}
        <div className="portfolio-right border-l border-border">
          {/* Navigation */}
          <div className="sticky top-4 z-40 mb-6">
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-card/90 backdrop-blur-sm rounded-lg border border-primary/20">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                  >
                    <Icon className="w-3.5 h-3.5 mr-1.5" />
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content based on active section */}
          <div className="space-y-8">
            {activeSection === "projects" && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
                  Featured Projects
                </h2>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      {...project}
                      delay={200 + index * 100}
                    />
                  ))}
                </div>
              </section>
            )}

            {activeSection === "experience" && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <Card 
                      key={exp.title}
                      className="project-card opacity-0 animate-slide-up"
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-base font-bold text-foreground">{exp.title}</h3>
                          <p className="text-sm text-primary font-medium">{exp.company}</p>
                          <p className="text-xs text-muted-foreground">{exp.period}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <span className="text-primary mt-0.5">•</span>
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
                <h2 className="text-xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
                  Certifications
                </h2>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <CertificationCard
                      key={cert.title}
                      {...cert}
                      delay={400 + index * 80}
                    />
                  ))}
                </div>
              </section>
            )}

            {activeSection === "achievements" && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
                  Achievements
                </h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <Card 
                      key={index}
                      className="project-card opacity-0 animate-slide-up overflow-hidden"
                      style={{ animationDelay: `${600 + index * 80}ms` }}
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/4 flex-shrink-0">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title}
                            className="w-full h-32 object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-base font-bold text-foreground">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
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