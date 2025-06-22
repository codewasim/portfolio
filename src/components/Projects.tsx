import React, { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track mouse position for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, projectId: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top; // y position within the card
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX; // -1 to 1
    const deltaY = (y - centerY) / centerY; // -1 to 1
    
    card.style.transform = `perspective(1000px) rotateX(${-deltaY * 5}deg) rotateY(${deltaX * 5}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Dynamic highlight effect
    const shine = card.querySelector('.shine') as HTMLElement;
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`;
    }
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    
    const shine = card.querySelector('.shine') as HTMLElement;
    if (shine) {
      shine.style.background = 'none';
    }
  };
  
  useEffect(() => {
    // Animation for projects appearing on scroll
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Start the animation sequence once section is visible
        const timer = setTimeout(() => {
          projects.forEach((project, index) => {
            setTimeout(() => {
              setVisibleProjects(prev => [...prev, project.id]);
            }, index * 200); // Stagger the animation
          });
        }, 300);
        
        return () => clearTimeout(timer);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Set underline width to match heading width
    const headingElement = document.querySelector('#projects-heading');
    const underlineElement = document.querySelector('#projects-underline');
    
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

  const projects: Project[] = [
    {
      id: 1,
      title: 'Currency Converter',
      description: 'A simple currency converter application built with Lightning Web Components framework and a currency API. It allows users to convert amounts between different currencies quickly and easily.',
      image: 'https://placehold.co/800x600/00A1E0/FFFFFF?text=Currency+Converter',
      technologies: ['LWC', 'Currency API', 'Apex', 'SOQL', 'JavaScript'],
      demoLink: 'https://hexawaretechnologies52-dev-ed.develop.my.site.com/codewasim/currency-converter',
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A dynamic Weather App built using Lightning Web Components (LWC) that fetches real-time weather data using a third-party Weather API. It displays current temperature, conditions, and location-specific forecasts with a clean, responsive UI.',
      image: 'https://placehold.co/800x600/00A1E0/FFFFFF?text=E-Commerce',
      technologies: ['LWC', 'Salesforce', 'API', 'JS'],
      demoLink: 'https://hexawaretechnologies52-dev-ed.develop.my.site.com/codewasim/weather-app',
      // codeLink: 'https://github.com/username/ecommerce',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard for business intelligence with real-time updates, custom filtering, and role-based access control for enterprise customers.',
      image: 'https://placehold.co/800x600/00A1E0/FFFFFF?text=Dashboard',
      technologies: ['JavaScript', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://example.com/dashboard',
      codeLink: 'https://github.com/username/dashboard',
    },
    {
      id: 4,
      title: 'Mobile Expense Tracker',
      description: 'Cross-platform mobile application for tracking personal expenses, featuring budget planning, receipt scanning, and expense categorization with custom reports.',
      image: 'https://placehold.co/800x600/00A1E0/FFFFFF?text=Expense+Tracker',
      technologies: ['React Native', 'Firebase', 'Google Cloud Vision API'],
      codeLink: 'https://github.com/username/expense-tracker',
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#00A1E0] blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#6452E9] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative inline-block mb-3">
          <h2 id="projects-heading" className="text-3xl font-bold text-salesforce-navy dark:text-white pb-2">
            Project Experience
          </h2>
          <span id="projects-underline" className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00A1E0] to-[#6452E9]"></span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
          Featured projects showcasing my technical expertise and problem-solving abilities
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform ${
                visibleProjects.includes(project.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transformStyle: 'preserve-3d',
                transition: 'all 0.4s ease-out'
              }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Interactive shine effect */}
              <div className="shine absolute inset-0 z-10 pointer-events-none"></div>
              
              <div className="relative h-60 overflow-hidden">
                {/* Image glare effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 z-10 transition-opacity duration-700"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="particle absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:animate-float-particle"></div>
                  <div className="particle absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full opacity-0 group-hover:animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
                  <div className="particle absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:animate-float-particle" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              <div className="p-6 relative">
                {/* Background gradient that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00A1E0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-salesforce-navy dark:text-white mb-3 group-hover:text-[#00A1E0] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-[#00A1E0] dark:text-gray-200 text-xs font-medium rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#00A1E0] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#008ec7] transform hover:translate-y-[-2px] hover:shadow-md"
                      >
                        View Demo
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    )}
                    
                    {project.codeLink && (
                      <a 
                        href={project.codeLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-[#00A1E0] text-[#00A1E0] text-sm font-medium rounded-lg hover:bg-[#00A1E0] hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md"
                      >
                        View Code
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
        @keyframes width-expand-projects {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
        
        .animate-width-expand-projects {
          animation: width-expand-projects 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          animation-delay: 0.5s;
        }
        
        .group-hover\\:animate-float-particle {
          animation: float-particle 2s ease-in-out infinite;
        }
        
        .shine {
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          mix-blend-mode: soft-light;
        }
        `}
      </style>
    </section>
  );
};

export default Projects; 
