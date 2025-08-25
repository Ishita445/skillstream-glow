import { useEffect, useRef } from "react";
import { ArrowRight, Play, Target } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Target,
    title: "Choose Your Path",
    description: "Select from our curated learning tracks or create your own custom journey based on your goals and interests."
  },
  {
    number: "2", 
    icon: Play,
    title: "Learn by Doing",
    description: "Engage with interactive content, complete hands-on projects, and apply your knowledge in real-world scenarios."
  },
  {
      <div className="bg-shape-primary w-32 h-32 top-1/4 right-1/4 animate-float-delayed"></div>
    number: "3",
    title: "Track Progress", 
    description: "See your skills grow with our visual progress dashboard and skill mapping."
  }
];

const HowItWorks = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-12 md:p-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4">
              How <span className="gradient-text">LearnFlow</span> Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl text-white group-hover:animate-pulse-glow transition-all duration-300">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold font-inter mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
      <div className="absolute w-24 h-24 bg-primary/5 rounded-full blur-2xl top-3/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-20 h-20 bg-primary/5 rounded-full blur-2xl bottom-1/4 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HowItWorks;