import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <section className="hero-section">
      {/* Left side content */}
      <div className="hero-content">
        <h1>Manage Your Money with GROUP3</h1>
        <p>The smart way to track expenses, save, and reach your financial goals.</p>
        <a href="#" className="cta-button">Get Started</a>
      </div>
      
      {/* Right side mockup */}
      <div className="mockup-container">
        <div className="iphone-mockup">
          <img src="/images/mockup.png" alt="iPhone mockup" className="iphone-frame" />
          <div className="screen-overlay">
            <video 
              ref={videoRef}
              className="screen-video" 
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/public/assets/videos/reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 