import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative z-10 py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black font-inter mb-6 leading-tight">
            Learn Smarter, <span className="gradient-text">Not Harder</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
            A modern learning platform that makes knowledge flow just like n8n's automations. 
            Interactive, visual, and designed for the way you learn.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="btn-hero text-lg px-8 py-6">
              Explore Courses
            </Button>
            <Button variant="outline" size="lg" className="btn-hero-outline text-lg px-8 py-6">
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;