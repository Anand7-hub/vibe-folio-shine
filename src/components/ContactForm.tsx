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
    <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
      <h2 className="text-2xl font-bold text-foreground">Let's Connect</h2>
      <Card className="p-4 md:p-6 bg-card/80 backdrop-blur-sm border-primary/20">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4" />
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="border-primary/20 focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="border-primary/20 focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              Phone (Optional)
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="border-primary/20 focus:border-primary"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm">
                <CalendarIcon className="w-4 h-4" />
                Preferred Date
              </Label>
              <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-primary/20 hover:border-primary",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-card border-primary/20">
                  <DialogHeader>
                    <DialogTitle>Select a Date</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center py-4">
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
            
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                Preferred Time
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                <SelectTrigger className="border-primary/20 hover:border-primary bg-card">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/20">
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="13:00">1:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-sm">
              <MessageSquare className="w-4 h-4" />
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or what you'd like to discuss..."
              className="border-primary/20 focus:border-primary min-h-[100px] resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-lg"
          >
            Schedule a Call
          </Button>
        </form>
      </Card>
    </div>
  );
}