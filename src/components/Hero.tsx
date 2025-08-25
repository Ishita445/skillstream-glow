import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative z-10 py-32 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black font-inter mb-8 leading-tight text-white animate-fade-in-up">
            Learn Smarter. <span className="gradient-text">Grow Faster.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the future of learning with our AI-powered platform. 
            Personalized paths, gamified progress, and expert mentorship all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="btn-hero text-lg px-12 py-6 w-full sm:w-auto">
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="btn-hero-outline text-lg px-12 py-6 w-full sm:w-auto">
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;