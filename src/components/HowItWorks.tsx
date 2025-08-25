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
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;