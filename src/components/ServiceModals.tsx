import { useState } from 'react';
import { Code, Video, TrendingUp, CheckCircle2, Sparkles, Target, Zap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: 'web' | 'video' | 'marketing';
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const serviceContent = {
    web: {
      title: 'Premium Web Development Services',
      subtitle: 'Transform Your Digital Presence with Cutting-Edge Web Solutions',
      icon: Code,
      gradient: 'from-blue-500 to-blue-600',
      heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
      sections: [
        {
          heading: 'Why Web Development Matters in 2024',
          content: `In today's digital-first world, your website is often the first interaction customers have with your brand. A professionally designed, high-performance website isn't just a nice-to-have—it's essential for business success. Our web development services combine stunning aesthetics with powerful functionality to create digital experiences that convert visitors into customers.`,
          image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop'
        },
        {
          heading: 'Our Technical Expertise',
          content: `We specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. Our team builds responsive, SEO-optimized websites that load lightning-fast and rank well on search engines. From custom e-commerce platforms to enterprise web applications, we deliver scalable solutions that grow with your business.`,
          bullets: [
            'Custom responsive web design tailored to your brand',
            'Progressive Web Apps (PWA) for enhanced mobile experience',
            'E-commerce solutions with secure payment integration',
            'Content Management Systems (CMS) for easy updates',
            'API development and third-party integrations',
            'Performance optimization and Core Web Vitals improvement'
          ]
        },
        {
          heading: 'SEO-First Development Approach',
          content: `Every website we build is engineered for search engine success. We implement technical SEO best practices including semantic HTML5, structured data markup, optimized meta tags, and fast page load speeds. Our sites are built to rank, ensuring your business gets found by the right customers at the right time.`,
          features: [
            { icon: Zap, text: 'Lightning-fast load times under 3 seconds' },
            { icon: Target, text: 'Mobile-first responsive design' },
            { icon: Sparkles, text: 'Clean, semantic code structure' },
            { icon: CheckCircle2, text: 'WCAG accessibility compliance' }
          ]
        }
      ],
      cta: 'Start Your Web Project Today'
    },
    video: {
      title: 'Full Service Video Production & Photography',
      subtitle: 'Captivate Your Audience with Professional Visual Storytelling',
      icon: Video,
      gradient: 'from-orange-500 to-red-500',
      heroImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=600&fit=crop',
      sections: [
        {
          heading: 'The Power of Visual Content Marketing',
          content: `Video content generates 1200% more shares than text and images combined. In an era where attention is the new currency, professional video production and photography services are your secret weapons for standing out. We create compelling visual narratives that resonate with your target audience and drive measurable business results.`,
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop'
        },
        {
          heading: 'Comprehensive Production Services',
          content: `From concept to final cut, we handle every aspect of video production. Our full-service approach includes creative development, scriptwriting, professional filming with cinema-grade equipment, and expert post-production. We deliver broadcast-quality content optimized for every platform—from social media to streaming services.`,
          bullets: [
            'Commercial and promotional video production',
            'Product photography and lifestyle shoots',
            'Drone videography for stunning aerial footage',
            'Corporate videos and testimonials',
            'Social media content creation',
            'Professional editing and color grading'
          ]
        },
        {
          heading: 'Photography That Sells',
          content: `Our professional photography services capture your products and brand in their best light. We specialize in e-commerce product photography, lifestyle brand photography, corporate headshots, and event coverage. Every image is meticulously edited to ensure consistency with your brand guidelines and optimized for web performance.`,
          features: [
            { icon: Sparkles, text: 'High-resolution imagery for all platforms' },
            { icon: Target, text: 'Brand-consistent visual style' },
            { icon: Zap, text: 'Quick turnaround times' },
            { icon: CheckCircle2, text: 'Full usage rights included' }
          ]
        }
      ],
      cta: 'Book Your Video Consultation'
    },
    marketing: {
      title: 'Strategic Digital Marketing Solutions',
      subtitle: 'Drive Growth with Data-Driven Marketing Strategies',
      icon: TrendingUp,
      gradient: 'from-cyan-500 to-blue-500',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      sections: [
        {
          heading: 'Marketing That Delivers ROI',
          content: `Digital marketing isn't about vanity metrics—it's about driving real business growth. Our data-driven approach combines creative excellence with analytical rigor to deliver campaigns that generate leads, increase conversions, and maximize your marketing ROI. We turn your marketing budget into measurable business outcomes.`,
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
        },
        {
          heading: 'Full-Stack Digital Marketing Services',
          content: `We offer comprehensive digital marketing solutions that cover every touchpoint in your customer journey. From SEO and content marketing to paid advertising and social media management, we create integrated campaigns that amplify your brand message and drive consistent growth across all channels.`,
          bullets: [
            'Search Engine Optimization (SEO) and SEM',
            'Pay-Per-Click (PPC) advertising management',
            'Social media marketing and community management',
            'Content marketing and blog writing',
            'Email marketing automation',
            'Conversion rate optimization (CRO)'
          ]
        },
        {
          heading: 'Advanced Analytics & Reporting',
          content: `We believe in complete transparency and measurable results. Our advanced analytics dashboard gives you real-time insights into campaign performance, customer behavior, and ROI. We provide detailed monthly reports with actionable recommendations to continuously improve your marketing effectiveness.`,
          features: [
            { icon: Target, text: 'Precision audience targeting' },
            { icon: Zap, text: 'Real-time campaign optimization' },
            { icon: Sparkles, text: 'AI-powered insights' },
            { icon: CheckCircle2, text: 'Transparent ROI tracking' }
          ]
        }
      ],
      cta: 'Get Your Free Marketing Audit'
    }
  };

  const content = serviceContent[service];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden dialog-content">
        <ScrollArea className="h-full max-h-[90vh] modal-scroll-area">
          <div className="relative">
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={content.heroImage} 
                alt={content.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className={`w-16 h-16 bg-gradient-to-br ${content.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  <content.icon className="h-8 w-8 text-white" />
                </div>
                <DialogHeader>
                  <DialogTitle className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {content.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-gray-200">
                    {content.subtitle}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-8 space-y-12">
              {content.sections.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">{section.heading}</h3>
                  
                  <div className={index % 2 === 0 ? 'md:flex md:space-x-8' : 'md:flex md:flex-row-reverse md:space-x-reverse md:space-x-8'}>
                    <div className="flex-1 space-y-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {section.content}
                      </p>
                      
                      {section.bullets && (
                        <ul className="space-y-3 mt-6">
                          {section.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start group">
                              <div className={`h-5 w-5 bg-gradient-to-r ${content.gradient} rounded-full mt-1 mr-3 flex-shrink-0 flex items-center justify-center`}>
                                <CheckCircle2 className="h-3 w-3 text-white" />
                              </div>
                              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {section.features && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                          {section.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                              <div className={`p-2 bg-gradient-to-br ${content.gradient} rounded-lg`}>
                                <feature.icon className="h-6 w-6 text-white" />
                              </div>
                              <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{feature.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {section.image && (
                      <div className="mt-6 md:mt-0 md:w-1/3 flex-shrink-0">
                        <img 
                          src={section.image} 
                          alt={section.heading}
                          className="w-full rounded-lg shadow-lg modal-image"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Let's discuss how our {service === 'web' ? 'web development' : service === 'video' ? 'video production' : 'digital marketing'} services can transform your business.
                </p>
                <button 
                  onClick={() => {
                    onClose();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`bg-gradient-to-r ${content.gradient} text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 modal-cta-button`}
                >
                  {content.cta}
                </button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal; 