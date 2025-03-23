import React from 'react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | string;
  description?: string;
  backgroundImage?: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Engineering in Computer Science & Engineering',
      institution: 'Anjuman Institute of Technology & Management',
      location: 'Bhatkal, Karnataka',
      startYear: 2018,
      endYear: 2022,
      description: 'Specialized in Software Engineering with a focus on cloud computing and distributed systems. Completed thesis on scalable microservices architecture.',
      backgroundImage: '/images/education/university.jpg'
    },
    {
      id: 2,
      degree: 'Higher Secondary School Certificate',
      institution: 'Jagatdal Chashma I Rahamat High School',
      location: 'Jagatdal, West Bengal',
      startYear: 2017,
      endYear: 2018,
      description: 'Persued my higher secondary education from this school. Specialized in Physics, Chemistry, and Mathematics.',
      backgroundImage: '/images/education/highschool.jpg'
    },
    {
      id: 3,
      degree: 'ICSE 10th',
      institution: 'Authpur National Model Higher Secondary School',
      location: 'Authpur, West Bengal',
      startYear: 2004,
      endYear: 2016,
      description: 'Schooling completed from this school. Specialized in Science, Mathematics,Computer Science and English.',
      backgroundImage: '/images/education/school.jpg'
    }
  ];
  
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-salesforce-blue transform rotate-45 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-salesforce-purple transform -rotate-12 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-salesforce-navy dark:text-white inline-block">
          Education
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-xl">
          My academic journey that has shaped my knowledge and professional foundation.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-salesforce-blue via-salesforce-purple to-salesforce-blue transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 bg-salesforce-blue rounded-full z-10 relative">
                    <div className="absolute inset-0 bg-salesforce-blue rounded-full animate-ping opacity-50"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-6 md:ml-0`}>
                  <div 
                    className="rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden backdrop-blur-lg"
                    style={{
                      background: item.backgroundImage 
                        ? `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)), url(${item.backgroundImage})`
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {/* Glassy overlay */}
                    <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-50 dark:opacity-70 backdrop-blur-md"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-6 inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-salesforce-blue to-salesforce-purple shadow-md">
                        {item.startYear} - {item.endYear}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-salesforce-navy dark:text-white">
                        {item.degree}
                      </h3>
                      
                      <div className="mb-4">
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-salesforce-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                          {item.institution}
                        </div>
                        <div className="text-sm flex items-center text-gray-500 dark:text-gray-400 mt-2">
                          <svg className="w-4 h-4 mr-1 text-salesforce-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          {item.location}
                        </div>
                      </div>
                      
                      {item.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-4">
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
    </section>
  );
};

export default Education; 