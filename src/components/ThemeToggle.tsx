import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Add transition effect to document
    document.documentElement.style.transition = "background-color 0.5s ease, color 0.5s ease";
    
    setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      
      setTimeout(() => {
        document.documentElement.style.transition = "";
        setIsTransitioning(false);
      }, 500);
    }, 100);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 transition-all duration-500 hover:scale-110 hover:bg-primary/10 border-primary/30 ${
        isTransitioning ? "animate-theme-transition" : ""
      }`}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 transition-all duration-500" />
      ) : (
        <Sun className="h-4 w-4 transition-all duration-500 animate-glow" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}