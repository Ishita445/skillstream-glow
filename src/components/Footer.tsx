import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 md:py-16 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <a href="#" className="flex items-center text-xl md:text-2xl font-bold font-inter">
            <span className="text-primary">Learn</span>
            <span className="text-foreground">Flow</span>
          </a>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
              About
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base">
              Privacy Policy
            </a>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href="#" 
              className="w-8 h-8 md:w-10 md:h-10 bg-muted/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Twitter className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 md:w-10 md:h-10 bg-muted/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 md:w-10 md:h-10 bg-muted/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/20 text-center text-muted-foreground">
          <p className="font-inter text-sm md:text-base">&copy; 2024 LearnFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;