import React from 'react';
import IPhoneMockup from '../components/IPhoneMockup';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to GROUP3
            </h1>
            <p className="text-lg mb-6">
              Manage Your Money with GROUP3
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">
                Get Started
              </button>
              <button className="border border-black px-6 py-3 rounded-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-mockup-column flex justify-center">
            <IPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 