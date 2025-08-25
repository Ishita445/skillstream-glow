import Header from "@/components/Header";
import Hero from "@/components/Hero";  
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import BackgroundElements from "@/components/BackgroundElements";

const Index = () => {
  return (
    <div className="min-h-screen font-inter relative overflow-hidden">
      <BackgroundElements />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
