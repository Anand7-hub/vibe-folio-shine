import { Card } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
  delay?: number;
}

export function SkillCard({ title, skills, delay = 0 }: SkillCardProps) {
  return (
    <Card 
      className="skill-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="font-semibold mb-3 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            style={{ animationDelay: `${delay + index * 100}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}