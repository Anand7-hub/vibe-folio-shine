import { Card } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
  delay?: number;
}

export function SkillCard({ title, skills, delay = 0 }: SkillCardProps) {
  return (
    <Card 
      className="skill-card opacity-0 animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="font-bold mb-3 text-foreground/90 text-sm uppercase tracking-wider">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="px-4 py-1.5 bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:from-primary hover:to-accent hover:text-primary-foreground hover:shadow-lg border border-primary/20 hover:border-primary/50"
            style={{ animationDelay: `${delay + index * 50}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}