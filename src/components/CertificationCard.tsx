import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  status: "Completed" | "In Progress";
  badgeText?: string;
  credentialUrl?: string;
  delay?: number;
}

export function CertificationCard({ 
  title, 
  issuer, 
  date, 
  status, 
  badgeText,
  credentialUrl,
  delay = 0 
}: CertificationCardProps) {
  return (
    <Card 
      className="p-6 border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-scale-in bg-card/80 backdrop-blur-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-4">
        {badgeText ? (
          <div className="cert-badge">
            {badgeText}
          </div>
        ) : (
          <Award className="w-8 h-8 text-primary mt-1" />
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-foreground text-lg">{title}</h4>
          <p className="text-muted-foreground mb-3">{issuer}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {date}
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={status === "Completed" ? "default" : "secondary"}
                className="text-xs"
              >
                {status}
              </Badge>
              {credentialUrl && status === "Completed" && (
                <Button variant="outline" size="sm" asChild>
                  <a href={credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Show Credential
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}