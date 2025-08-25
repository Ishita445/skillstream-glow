import { User, Trophy, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: User,
    title: "Personalized Learning",
    description: "AI-powered learning paths that adapt to your pace, style, and goals. Every journey is uniquely yours."
  },
  {
    icon: Trophy,
    title: "Gamified Progress",
    description: "Earn badges, unlock achievements, and compete with peers. Learning becomes an engaging adventure."
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Connect with industry professionals and experienced educators. Get guidance when you need it most."
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl md:text-6xl font-bold font-inter mb-6 text-white">
            Why <span className="gradient-text">LearnFlow</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three core pillars that make learning effective, engaging, and personalized for every student.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mb-8 group-hover:animate-pulse-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold font-inter mb-6 text-card-foreground">
                {feature.title}
              </h3>
              
              <p className="text-card-foreground/70 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;