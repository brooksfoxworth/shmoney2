import React from 'react';
import './LaptopMockup.css';

const LaptopMockup: React.FC = () => {
  return (
    <div className="laptop-mockup">
      <img 
        src="/assets/images/laptop mockup with screenshot.png" 
        alt="Laptop displaying VLN interface" 
        className="laptop-frame"
      />
    </div>
  );
};

export default LaptopMockup; 