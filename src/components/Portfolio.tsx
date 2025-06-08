import { ExternalLink, ArrowRight, Sparkles, TrendingUp, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: 'Viva La Noche',
      category: 'Web Design',
      result: 'Stunning Digital Experience',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Crafted a stunning web design that captures the vibrant essence of Japanese cuisine and nightlife culture',
      icon: Target,
      color: 'from-blue-500 to-cyan-400',
      link: 'https://vlncatering.com/'
    },
    {
      title: 'Jlew_Lifts',
      category: 'Social Media Growth',
      result: 'Community Building',
      image: '/assets/images/jacob thumnail.png',
      description: 'Building an engaged fitness community through authentic storytelling',
      icon: Users,
      color: 'from-orange-500 to-pink-400',
      link: 'https://www.instagram.com/jlew_lifts/'
    },
    {
      title: 'A&I Hospitality',
      category: 'Growth Marketing',
      result: 'Market Breakthrough',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Connecting talented hospitality professionals with top restaurants through strategic staffing solutions',
      icon: TrendingUp,
      color: 'from-purple-500 to-blue-400'
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full opacity-30 translate-y-48 -translate-x-48"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Making <span className="gradient-text">Waves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project is a new adventure. Here's how we've helped brands 
            make their mark in the digital ocean.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-white/80 backdrop-blur-sm ${project.link ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (project.link) {
                    window.open(project.link, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                     style={{ background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}>
                </div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <IconComponent className="w-5 h-5" />
                        <span className="font-semibold">{project.category}</span>
                      </div>
                      <div className="text-orange-300 font-medium">{project.result}</div>
                    </div>
                  </div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`inline-block bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                      {project.category}
                    </span>
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-orange-500 transition-all duration-300 group/btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-6 w-6 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-transform duration-300" />
                      </a>
                    ) : (
                      <button className="text-primary hover:text-orange-500 transition-all duration-300 group/btn">
                        <ExternalLink className="h-6 w-6 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-transform duration-300" />
                      </button>
                    )}
                  </div>
                </CardContent>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-orange-400 transition-all duration-500 opacity-0 group-hover:opacity-50"></div>
              </Card>
            );
          })}
        </div>

        {/* Call to action with special styling */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 p-1 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-800 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 group-hover:bg-transparent group-hover:text-white flex items-center gap-3"
            >
              <span>Ready to Make Waves?</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
          <p className="text-gray-500 mt-4 text-sm">Let's create something extraordinary together</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
