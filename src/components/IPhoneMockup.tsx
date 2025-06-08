import React, { useEffect, useRef } from 'react';
import './IPhoneMockup.css';

const IPhoneMockup: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Set all video properties explicitly
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      
      // Force play function
      const forcePlay = () => {
        video.play().catch(error => {
          console.error("Video playback failed:", error);
          // Retry after a short delay
          setTimeout(() => {
            video.play().catch(e => console.error("Retry failed:", e));
          }, 100);
        });
      };
      
      // Try to play on various events
      forcePlay();
      video.addEventListener('loadedmetadata', forcePlay);
      video.addEventListener('loadeddata', forcePlay);
      video.addEventListener('canplay', forcePlay);
      
      // Force restart if video pauses
      video.addEventListener('pause', () => {
        video.play();
      });
      
      // Backup loop
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
      
      // Intersection Observer to play when visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            forcePlay();
          }
        });
      });
      
      observer.observe(video);
      
      // Cleanup
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="iphone-mockup">
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
          <source src="/assets/videos/reel (2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default IPhoneMockup; 