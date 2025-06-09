import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import IPhoneMockup from '@/components/IPhoneMockup';
import LaptopMockup from '@/components/LaptopMockup';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-x-hidden lg:overflow-hidden pt-16 lg:pt-20 xl:pt-24">
      {/* Enhanced coastal background with floating particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-orange-50"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30 animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Enhanced layered waves at bottom with shimmer effect */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-64 text-blue-100 wave-shimmer" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 C300,10 600,80 900,40 C1050,20 1150,70 1200,40 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="animate-pulse"
          />
        </svg>
        <svg 
          className="absolute bottom-0 left-0 w-full h-48 text-blue-200 opacity-80 wave-shimmer" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C200,30 400,90 600,60 C800,30 1000,90 1200,60 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '3s' }}
          />
        </svg>
        <svg 
          className="absolute bottom-0 left-0 w-full h-32 text-blue-300 opacity-60 wave-shimmer" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,80 C150,40 350,100 500,60 C700,20 900,80 1200,50 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '4s' }}
          />
        </svg>
        <svg 
          className="absolute bottom-0 left-0 w-full h-20 text-orange-200 opacity-40 wave-shimmer" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,90 C100,70 200,110 400,80 C600,50 800,100 1200,70 L1200,120 L0,120 Z" 
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDelay: '3s', animationDuration: '5s' }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="hero-main-content flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Hero text column */}
          <div className="hero-text-column flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 lg:mb-12 leading-tight">
              <span className="hero-heading-main" data-text="Ride the Wave of">
                Ride the Wave of
              </span>
              <span className="block hero-heading-accent gradient-text pt-4 lg:pt-6 pb-2">
                Digital Success
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-delay">
              Ready to make waves in the digital world? We help ambitious businesses 
              catch the perfect digital marketing wave and ride it to success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center animate-fade-in-delay-2">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg group button-glow"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Hero mockup column - Both mockups */}
          <div className="hero-mockup-column flex-1 w-full flex justify-center lg:justify-end items-center mt-8 lg:mt-0 animate-fade-in-delay">
            <div className="mockups-container w-full">
              <div className="laptop-mockup-wrapper">
                <LaptopMockup />
              </div>
              <div className="phone-mockup-wrapper">
                <IPhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
