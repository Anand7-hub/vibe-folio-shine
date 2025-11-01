import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  status: "Completed" | "In Progress";
  badgeText?: string;
  image?: string;
  delay?: number;
}

export function CertificationCard({ 
  title, 
  issuer, 
  date, 
  status, 
  badgeText,
  image,
  delay = 0 
}: CertificationCardProps) {
  return (
    <Card 
      className="project-card opacity-0 animate-slide-up overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex-shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Award className="w-16 h-16 text-primary" />
            </div>
          )}
        </div>
        
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
            <p className="text-base text-primary font-medium">{issuer}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-sm text-muted-foreground">{date}</span>
              <span className={`text-xs px-3 py-1 rounded-full ${
                status === "Completed" 
                  ? "bg-primary/20 text-primary" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}