import React, { useState } from 'react';

interface Certification {
  id: number;
  name: string;
  provider: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialURL?: string;
  badgeImage: string;
  description?: string;
  skills?: string[];
}

const Certifications: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const certifications: Certification[] = [
    {
      id: 1,
      name: 'Salesforce Certified Administrator',
      provider: 'Salesforce',
      issueDate: 'Jan 2023',
      expiryDate: 'Jan 2026',
      credentialId: '269628',
      credentialURL: 'https://trailblazer.me/id/credential/verify',
      badgeImage: `https://codewasim.github.io/portfolio/admin.png`,
      description: 'Demonstrates expertise in Salesforce configuration, user management, and security settings.',
      skills: ['User Management', 'Security Controls', 'Data Management', 'Workflow Automation']
    },
    {
      id: 2,
      name: 'Salesforce Certified Platform Developer I',
      provider: 'Salesforce',
      issueDate: 'Mar 2023',
      expiryDate: 'Mar 2026',
      credentialId: 'SF-PD1-789012',
      credentialURL: 'https://trailblazer.me/id/credential/verify',
      badgeImage: `https://codewasim.github.io/portfolio/pdI.png`,
      description: 'Validates ability to develop custom applications on the Salesforce platform using Apex and Visualforce.',
      skills: ['Apex Programming', 'Visualforce', 'SOQL/SOSL', 'Data Modeling']
    },
    {
      id: 3,
      name: 'Salesforce Certified JavaScript Developer I',
      provider: 'Salesforce',
      issueDate: 'Jun 2023',
      expiryDate: 'Jun 2026',
      credentialId: 'SF-JSD1-345678',
      credentialURL: 'https://trailblazer.me/id/credential/verify',
      badgeImage: `https://codewasim.github.io/portfolio/JSI.png`,
      description: 'Confirms proficiency in JavaScript development for Salesforce applications, particularly Lightning Web Components.',
      skills: ['JavaScript Development', 'Lightning Web Components', 'Events & Communication', 'Data Access']
    },
    {
      id: 4,
      name: 'Salesforce Certified Associate',
      provider: 'Salesforce',
      issueDate: 'Sep 2022',
      credentialId: 'SF-ASSOC-901234',
      credentialURL: 'https://trailblazer.me/id/credential/verify',
      badgeImage: `https://codewasim.github.io/portfolio/Associate.png`,
      description: 'Entry-level certification that demonstrates fundamental knowledge of the Salesforce platform and ecosystem.',
      skills: ['Salesforce Fundamentals', 'Cloud Computing', 'CRM Concepts', 'Basic Administration']
    },
    {
      id: 5,
      name: 'Salesforce Certified Einstein AI Associate',
      provider: 'Salesforce',
      issueDate: 'Nov 2023',
      expiryDate: 'Nov 2026',
      credentialId: 'SF-EAI-567890',
      credentialURL: 'https://trailblazer.me/id/credential/verify',
      badgeImage: `https://codewasim.github.io/portfolio/AIassociate.png`,
      description: 'Validates knowledge of AI capabilities within Salesforce and how to implement Einstein features.',
      skills: ['Einstein Prediction Builder', 'AI Ethics', 'Einstein Analytics', 'Machine Learning Concepts']
    },
    {
      id: 6,
      name: 'Salesforce Certified Platform App Builder',
      provider: 'Salesforce',
      issueDate: 'Aug 2023',
      expiryDate: 'Aug 2026',
      credentialId: 'SF-PAB-234567',
      credentialURL: 'https://trailblazer.me/id/credential/verify',
      badgeImage: `https://codewasim.github.io/portfolio/platformAppBuilder.png`,
      description: 'Demonstrates ability to build custom applications using declarative Salesforce tools.',
      skills: ['App Design', 'Business Logic', 'User Interface', 'Reports & Dashboards']
    }
  ];
  
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-salesforce-blue to-salesforce-purple transform rotate-12 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-salesforce-purple to-salesforce-blue transform -rotate-12 blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 rounded-full bg-salesforce-navy transform rotate-45 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-salesforce-navy dark:text-white inline-block bg-clip-text text-transparent bg-gradient-to-r from-salesforce-blue to-salesforce-purple">
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-salesforce-blue to-salesforce-purple mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Validated expertise in Salesforce technologies and development practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="group relative"
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card background with hover effect */}
              <div 
                className={`absolute inset-0 rounded-2xl transition-all duration-500 ease-in-out scale-100 ${
                  hoveredCard === cert.id 
                    ? '' 
                    : ''
                } bg-white/10 dark:bg-gray-800/30`}
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: hoveredCard === cert.id 
                    ? '0 15px 30px -5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(1, 118, 211, 0.2)' 
                    : '0 10px 20px -10px rgba(0, 0, 0, 0.2)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                  transform: hoveredCard === cert.id ? 'translateY(-5px)' : 'translateY(0)'
                }}
              ></div>
              
              {/* Card content */}
              <div className="relative p-6 sm:p-8 z-10 h-full flex flex-col justify-between">
                <div>
                  {/* Logo/badge placement */}
                  <div className="w-full flex justify-center mb-6">
                    <div className="relative w-32 h-32">
                      {/* Logo with fallback */}
                      <img 
                        src={cert.badgeImage}
                        alt={`${cert.name} badge`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.classList.add('bg-gradient-to-r', 'from-salesforce-blue', 'to-salesforce-purple', 'flex', 'items-center', 'justify-center', 'text-white', 'text-3xl', 'font-bold', 'rounded-full');
                          target.parentElement!.innerHTML = cert.name.split(' ').filter(word => word !== 'Salesforce' && word !== 'Certified').map(word => word.charAt(0)).join('');
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Certificate details */}
                  <div className={`transition-all duration-300 text-salesforce-navy dark:text-white`}>
                    <h3 className="text-xl font-bold mb-2 text-center">
                      {cert.name}
                    </h3>
                    
                    <div className="flex justify-center space-x-2 mb-3">
                      <div className={`text-xs font-medium px-3 py-1 rounded-full inline-flex items-center 
                        bg-salesforce-blue/10 text-salesforce-blue dark:bg-blue-900/30 dark:text-blue-300`}>
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {cert.issueDate} {cert.expiryDate && `- ${cert.expiryDate}`}
                      </div>
                    </div>
                    
                    {/* Credential ID */}
                    {cert.credentialId && (
                      <div className="flex justify-center mb-3">
                        <div className={`text-xs font-medium px-3 py-1 rounded-full inline-flex items-center 
                          bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300`}>
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                          </svg>
                          ID: {cert.credentialId}
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <p className={`text-sm font-medium mb-3 text-gray-600 dark:text-gray-300`}>
                        {cert.provider}
                      </p>
                    </div>

                    {/* Description - always shown */}
                    {cert.description && (
                      <div className={`mt-3 text-sm text-gray-600 dark:text-gray-300`}>
                        <p className="mb-3">{cert.description}</p>
                        
                        {cert.skills && cert.skills.length > 0 && (
                          <div>
                            <h4 className={`text-xs uppercase font-semibold mb-2 text-gray-500 dark:text-gray-400`}>Key Skills</h4>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.map((skill, index) => (
                                <span 
                                  key={index} 
                                  className={`text-xs px-2 py-1 rounded-full 
                                    bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Verify button */}
                {cert.credentialURL && (
                  <div className="mt-6 text-center">
                    <a 
                      href={cert.credentialURL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                        bg-gradient-to-r from-salesforce-blue to-salesforce-purple text-white shadow-md hover:shadow-lg ${
                        hoveredCard === cert.id ? 'scale-105' : ''
                      }`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Verify
                    </a>
                  </div>
                )}
              </div>
              
              {/* Animated particle effects (only visible on hover) */}
              {hoveredCard === cert.id && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-salesforce-blue/40 animate-pulse-slow opacity-75"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-salesforce-purple/40 animate-pulse-slow opacity-75 animation-delay-300"></div>
                  <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-salesforce-navy/40 animate-pulse-slow opacity-75 animation-delay-700"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-slow {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        `}
      </style>
    </section>
  );
};

export default Certifications; 