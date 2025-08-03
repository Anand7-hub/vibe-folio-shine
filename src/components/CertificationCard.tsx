import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  status: "Completed" | "In Progress";
  delay?: number;
}

export function CertificationCard({ 
  title, 
  issuer, 
  date, 
  status, 
  delay = 0 
}: CertificationCardProps) {
  return (
    <Card 
      className="p-4 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-3">
        <Award className="w-5 h-5 text-primary mt-1" />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{issuer}</p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="w-3 h-3 mr-1" />
              {date}
            </div>
            <Badge 
              variant={status === "Completed" ? "default" : "secondary"}
              className="text-xs"
            >
              {status}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}