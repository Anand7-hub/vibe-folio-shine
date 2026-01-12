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
      <h3 className="font-semibold mb-2 text-foreground/90 text-xs uppercase tracking-wide">{title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:border-primary/50"
            style={{ animationDelay: `${delay + index * 30}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}