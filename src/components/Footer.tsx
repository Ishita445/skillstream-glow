import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="flex items-center text-2xl font-bold font-inter">
            <span className="text-primary">Learn</span>
            <span className="text-foreground">Flow</span>
          </a>
          
          <div className="flex flex-wrap items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p className="font-inter">&copy; 2024 LearnFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;