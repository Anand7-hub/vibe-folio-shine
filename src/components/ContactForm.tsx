import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, Mail, Phone, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, selectedDate });
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-3 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <h2 className="text-lg font-bold text-foreground">Let's Connect</h2>
      <Card className="p-3 bg-card border border-primary/20">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="flex items-center gap-1.5 text-xs">
              <User className="w-3 h-3" />
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="border-primary/20 focus:border-primary h-8 text-sm bg-background"
            />
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="email" className="flex items-center gap-1.5 text-xs">
              <Mail className="w-3 h-3" />
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="border-primary/20 focus:border-primary h-8 text-sm bg-background"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <Label className="flex items-center gap-1.5 text-xs">
                <CalendarIcon className="w-3 h-3" />
                Date
              </Label>
              <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-primary/20 hover:border-primary h-8 text-xs bg-background",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-1.5 h-3 w-3" />
                    {selectedDate ? format(selectedDate, "MMM d") : <span>Pick date</span>}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[350px] bg-background border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="text-sm">Select a Date</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center py-2">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setIsCalendarOpen(false);
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="rounded-md border border-primary/20"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="space-y-1.5">
              <Label className="flex items-center gap-1.5 text-xs">
                <Clock className="w-3 h-3" />
                Time
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                <SelectTrigger className="border-primary/20 hover:border-primary bg-background h-8 text-xs">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-background border-primary/20">
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-1.5">
            <Label htmlFor="message" className="flex items-center gap-1.5 text-xs">
              <MessageSquare className="w-3 h-3" />
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="border-primary/20 focus:border-primary min-h-[60px] resize-none text-sm bg-background"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 h-8 text-sm font-medium"
          >
            Schedule a Call
          </Button>
        </form>
      </Card>
    </div>
  );
}