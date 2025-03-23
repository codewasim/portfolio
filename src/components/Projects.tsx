import React from 'react';

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
  const projects: Project[] = [
    {
      id: 1,
      title: 'Salesforce CRM Customization',
      description: 'Custom Salesforce implementation with Lightning Web Components, Apex triggers, and custom objects to streamline sales processes and improve data visibility for a financial services company.',
      image: 'https://placehold.co/800x600/0176D3/FFFFFF?text=Salesforce+CRM',
      technologies: ['Salesforce', 'Lightning Web Components', 'Apex', 'SOQL'],
      demoLink: 'https://example.com/crm-demo',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with React frontend and Spring Boot backend, featuring secure user authentication, product catalog, shopping cart, and payment processing integration.',
      image: 'https://placehold.co/800x600/0176D3/FFFFFF?text=E-Commerce',
      technologies: ['React', 'Spring Boot', 'MySQL', 'Stripe API', 'Docker'],
      demoLink: 'https://example.com/ecommerce',
      codeLink: 'https://github.com/username/ecommerce',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard for business intelligence with real-time updates, custom filtering, and role-based access control for enterprise customers.',
      image: 'https://placehold.co/800x600/0176D3/FFFFFF?text=Dashboard',
      technologies: ['JavaScript', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      demoLink: 'https://example.com/dashboard',
      codeLink: 'https://github.com/username/dashboard',
    },
    {
      id: 4,
      title: 'Mobile Expense Tracker',
      description: 'Cross-platform mobile application for tracking personal expenses, featuring budget planning, receipt scanning, and expense categorization with custom reports.',
      image: 'https://placehold.co/800x600/0176D3/FFFFFF?text=Expense+Tracker',
      technologies: ['React Native', 'Firebase', 'Google Cloud Vision API'],
      codeLink: 'https://github.com/username/expense-tracker',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-salesforce-navy dark:text-white pb-2 border-b-2 border-salesforce-blue inline-block">
          Project Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-salesforce-navy dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-salesforce-blue dark:text-gray-200 text-xs font-medium rounded-full"
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
                      className="inline-flex items-center px-4 py-2 bg-salesforce-blue text-white text-sm font-medium rounded-lg transition-colors hover:bg-salesforce-navy"
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
                      className="inline-flex items-center px-4 py-2 border border-salesforce-blue text-salesforce-blue text-sm font-medium rounded-lg hover:bg-salesforce-blue hover:text-white transition-colors"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 