import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-20 py-4 md:py-6">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center text-xl md:text-2xl font-bold font-inter">
            <span className="text-primary">Learn</span>
            <span className="text-foreground">Flow</span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-6 md:space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
              Courses
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
              Features
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
              Pricing
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
              About
            </a>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex text-sm md:text-base px-3 md:px-4 py-2">
              Log in
            </Button>
            <Button className="btn-hero text-sm md:text-base px-4 md:px-6 py-2">
              Sign up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;