import React, { useState, useEffect, useRef } from 'react';
import './IPhoneMockup.css'; 

const IPhoneMockup: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const mockupStyle = isMobile 
    ? { transform: 'rotate(5deg)', left: '-50px', position: 'relative' } 
    : {};

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      
      const forcePlay = () => {
        video.play().catch(error => {
          console.error("Video playback failed:", error);
        });
      };
      
      forcePlay();
      video.addEventListener('loadeddata', forcePlay);
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            forcePlay();
          }
        });
      });
      
      observer.observe(video);
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="iphone-mockup" style={mockupStyle}>
      <img 
        src="/assets/images/mockup.png" 
        alt="iPhone displaying GROUP3 marketing reel" 
        className="iphone-frame"
      />
      <div className="screen-overlay">
        <video 
          ref={videoRef}
          className="screen-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          webkit-playsinline="true"
          aria-label="iPhone displaying GROUP3 marketing reel"
        >
          <source src="/assets/videos/mockup reel 2 (1).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default IPhoneMockup;
