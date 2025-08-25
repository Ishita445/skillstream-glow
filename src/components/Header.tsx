import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-20 py-6">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center text-2xl font-bold font-inter">
            <span className="text-primary">Learn</span>
            <span className="text-secondary">Flow</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Courses
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Log in
            </Button>
            <Button className="btn-hero">
              Sign up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;