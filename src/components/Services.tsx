import { useState } from 'react';
import { Code, Video, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceModal from './ServiceModals';

const Services = () => {
  const [openModal, setOpenModal] = useState<'web' | 'video' | 'marketing' | null>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies to elevate your online presence.',
      features: ['Custom Website Design', 'E-commerce Solutions', 'Mobile-Responsive Design', 'SEO Optimization'],
      gradient: 'from-blue-500 to-blue-600',
      modalKey: 'web' as const
    },
    {
      icon: Video,
      title: 'Full Service Video Production & Photography',
      description: 'Professional video production and photography services that capture your brand\'s essence and tell your story.',
      features: ['Commercial Video Production', 'Product Photography', 'Brand Photography', 'Video Editing & Post-Production'],
      gradient: 'from-orange-500 to-red-500',
      modalKey: 'video' as const
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that drive growth, engagement, and measurable results.',
      features: ['Social Media Management', 'Content Strategy', 'Paid Advertising', 'Analytics & Reporting'],
      gradient: 'from-cyan-500 to-blue-500',
      modalKey: 'marketing' as const
    }
  ];

  return (
    <>
      <section id="services" className="relative py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-orange-50 overflow-hidden">
        {/* Enhanced coastal wave background */}
        <div className="absolute inset-0">
          <svg 
            className="absolute top-0 left-0 w-full h-32 text-blue-100 transform rotate-180 wave-shimmer" 
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
            className="absolute bottom-0 left-0 w-full h-32 text-orange-100 opacity-60 wave-shimmer" 
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
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-reveal">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From stunning websites to captivating visuals and strategic marketing, 
              we provide everything you need to make waves in your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white overflow-hidden relative service-card-glow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-orange-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10 pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg icon-float`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 feature-slide-in" style={{ animationDelay: `${(index * 200) + (idx * 100)}ms` }}>
                        <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-4 flex-shrink-0 pulse-dot`}></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => setOpenModal(service.modalKey)}
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 button-glow`}
                    >
                      Learn More
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 button-glow cta-pulse"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>

      {/* Service Modals */}
      {openModal && (
        <ServiceModal
          isOpen={!!openModal}
          onClose={() => setOpenModal(null)}
          service={openModal}
        />
      )}
    </>
  );
};

export default Services;
