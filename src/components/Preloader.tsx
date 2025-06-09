import React from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
return (
<div className="preloader">
{/* Use the public path directly in the src attribute */}
<img src="/assets/images/group3 logo.PNG" alt="Group3 Logo" className="preloader-logo" />
</div>
);
};

export default Preloader;
