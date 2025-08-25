import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Choose Your Path",
    description: "Select from our curated learning tracks or create your own custom journey."
  },
  {
    number: "2", 
    title: "Learn by Doing",
    description: "Engage with interactive content and build real projects as you learn."
  },
  {
    number: "3",
    title: "Track Progress", 
    description: "See your skills grow with our visual progress dashboard and skill mapping."
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const steps = entry.target.querySelectorAll('.step-card');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('animate-in');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16">
          <div className={`text-center mb-12 md:mb-16 scroll-animate ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter mb-4">
              How <span className="gradient-text">LearnFlow</span> Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center group step-card">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg md:text-xl text-white group-hover:animate-pulse-glow transition-all duration-300">
                  {step.number}
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold font-inter mb-4 text-card-foreground">
                  {step.title}
                </h3>
                
                <p className="text-card-foreground/70 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;