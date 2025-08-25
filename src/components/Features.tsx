import { Lightbulb, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Interactive Learning",
    description: "Engage with hands-on content, not just theory. Build real skills with our interactive coding environment."
  },
  {
    icon: Zap,
    title: "Visual Progress",
    description: "See your learning journey mapped out visually. Track progress and understand how concepts connect."
  },
  {
    icon: Heart,
    title: "Personalized Paths",
    description: "Get course recommendations based on your goals and learning style. No two journeys are the same."
  }
];

const Features = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4">
            Why <span className="gradient-text">LearnFlow</span> Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold font-inter mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
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