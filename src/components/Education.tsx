import React, { useEffect, useState, useRef } from 'react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | string;
  description?: string;
  backgroundImage?: string | null;
}

const Education: React.FC = () => {
  const [visible, setVisible] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Timeline animation with staggered reveal
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Start the animation sequence once section is visible
        const timer = setTimeout(() => {
          educationItems.forEach((item, index) => {
            setTimeout(() => {
              setVisible(prev => [...prev, item.id]);
            }, index * 400); // Stagger the animation
          });
        }, 300);
        
        return () => clearTimeout(timer);
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Set underline width to match heading width
    const headingElement = document.querySelector('#education-heading');
    const underlineElement = document.querySelector('#education-underline');
    
    if (headingElement && underlineElement) {
      const headingWidth = headingElement.getBoundingClientRect().width;
      (underlineElement as HTMLElement).style.width = `${headingWidth}px`;
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Engineering in Computer Science & Engineering',
      institution: 'Anjuman Institute of Technology & Management',
      location: 'Bhatkal, Karnataka',
      startYear: 2018,
      endYear: 2022,
      description: 'Specialized in Software Engineering with a focus on cloud computing and distributed systems. Completed thesis on scalable microservices architecture.',
      backgroundImage: null
    },
    {
      id: 2,
      degree: 'Higher Secondary School Certificate',
      institution: 'Jagatdal Chashma I Rahamat High School',
      location: 'Jagatdal, West Bengal',
      startYear: 2017,
      endYear: 2018,
      description: 'Persued my higher secondary education from this school. Specialized in Physics, Chemistry, and Mathematics.',
      backgroundImage: null
    },
    {
      id: 3,
      degree: 'ICSE 10th',
      institution: 'Authpur National Model Higher Secondary School',
      location: 'Authpur, West Bengal',
      startYear: 2004,
      endYear: 2016,
      description: 'Schooling completed from this school. Specialized in Science, Mathematics,Computer Science and English.',
      backgroundImage: null
    }
  ];
  
  return (
    <section ref={sectionRef} id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated background graphics with parallax */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00A1E0] transform rotate-45 blur-3xl motion-safe:animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-[#6452E9] transform -rotate-12 blur-3xl motion-safe:animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative inline-block mb-6">
          <h2 id="education-heading" className="text-3xl font-bold text-salesforce-navy dark:text-white pb-2">
            Education
          </h2>
          <span id="education-underline" className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00A1E0] to-[#6452E9]"></span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-xl animate-on-scroll opacity-0 transition-all duration-1000 translate-y-6" style={{ transitionDelay: '200ms' }}>
          My academic journey that has shaped my knowledge and professional foundation.
        </p>
        
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 md:left-1/2 h-0 w-px bg-gradient-to-b from-[#00A1E0] via-[#6452E9] to-[#00A1E0] transform -translate-x-1/2 hidden md:block animate-line-grow"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } opacity-0 translate-y-10 transition-all duration-1000`}
                style={{ 
                  opacity: visible.includes(item.id) ? 1 : 0,
                  transform: visible.includes(item.id) ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Timeline dot with enhanced pulse effect */}
                <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 hidden md:block transition-opacity duration-500 delay-500 ${visible.includes(item.id) ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-4 h-4 bg-[#00A1E0] rounded-full z-10 relative">
                    <div className="absolute inset-0 bg-[#00A1E0] rounded-full animate-ping-slow opacity-50"></div>
                  </div>
                </div>
                
                {/* Content with staggered reveal */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-6 md:ml-0`}>
                  <div 
                    className="rounded-xl shadow-lg p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden backdrop-blur-lg md:hover:scale-105"
                    style={{
                      background: `linear-gradient(145deg, ${index % 3 === 0 ? 'rgba(0, 161, 224, 0.1)' : index % 3 === 1 ? 'rgba(100, 82, 233, 0.1)' : 'rgba(41, 128, 185, 0.1)'}, rgba(255, 255, 255, 0.05))`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-shine opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Glassy overlay */}
                    <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-50 dark:opacity-70 backdrop-blur-md"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-6 inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#00A1E0] to-[#6452E9] shadow-md animate-pulse-subtle">
                        {item.startYear} - {item.endYear}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-salesforce-navy dark:text-white">
                        {item.degree}
                      </h3>
                      
                      <div className="mb-4">
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center transform transition-transform duration-300 hover:translate-x-1">
                          <svg className="w-5 h-5 mr-2 text-[#00A1E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                          {item.institution}
                        </div>
                        <div className="text-sm flex items-center text-gray-500 dark:text-gray-400 mt-2 transform transition-transform duration-300 hover:translate-x-1">
                          <svg className="w-4 h-4 mr-1 text-[#6452E9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          {item.location}
                        </div>
                      </div>
                      
                      {item.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-4 transition-all duration-300 opacity-80 hover:opacity-100">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>
        {`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0); }
        }
        
        @keyframes pulse-subtle {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
        
        @keyframes line-grow {
          from { height: 0; }
          to { height: 100%; }
        }
        
        @keyframes width-expand {
          from { width: 0; }
          to { width: 50px; }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
        
        .animate-shine {
          animation: shine 4s ease-in-out infinite;
        }
        
        .animate-line-grow {
          animation: line-grow 1.5s ease-out forwards;
        }
        
        .animate-width-expand {
          animation: width-expand 1s ease-out 0.3s forwards;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-float,
          .animate-ping-slow,
          .animate-pulse-subtle,
          .animate-shine,
          .animate-line-grow,
          .animate-width-expand {
            animation: none;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Education; 