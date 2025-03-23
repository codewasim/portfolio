import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-salesforce-navy dark:text-white pb-2 border-b-2 border-salesforce-blue inline-block">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 border-4 border-salesforce-blue">
              <img 
                src='/ProfilePhoto.jpg'} 
                alt="Profile Photo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-salesforce-blue/70 to-transparent opacity-30"></div>
            </div>
            
            {/* Name */}
            <h3 className="text-2xl font-bold text-center text-salesforce-navy dark:text-white mt-4 mb-2">
              Wasim Ansari
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-6">Salesforce Developer</p>
            
            {/* Social Links */}
            <div className="w-full max-w-sm mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="space-y-3">
                  <a 
                    href="tel:+917044133855" 
                    className="flex items-center py-1 text-gray-700 dark:text-gray-300 hover:text-salesforce-blue dark:hover:text-salesforce-blue transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-salesforce-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-4 w-4 text-salesforce-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm">+91 7044133855</span>
                  </a>
                  
                  <a 
                    href="mailto:imailwsm@gmail.com" 
                    className="flex items-center py-1 text-gray-700 dark:text-gray-300 hover:text-salesforce-blue dark:hover:text-salesforce-blue transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-salesforce-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-4 w-4 text-salesforce-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm">imailwsm@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/codewasim" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center py-1 text-gray-700 dark:text-gray-300 hover:text-salesforce-blue dark:hover:text-salesforce-blue transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-salesforce-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-4 w-4 text-salesforce-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <span className="text-sm">linkedin.com/in/codewasim</span>
                  </a>
                  
                  <a 
                    href="https://www.salesforce.com/trailblazer/wasim9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center py-1 text-gray-700 dark:text-gray-300 hover:text-salesforce-blue dark:hover:text-salesforce-blue transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-salesforce-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-4 w-4 text-salesforce-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.866 1.5c-5.42 0-9.866 4.446-9.866 9.866 0 5.421 4.445 9.866 9.866 9.866 5.421 0 9.866-4.445 9.866-9.866 0-5.42-4.445-9.866-9.866-9.866zm4.582 13.816c-.436.135-.892.227-1.361.26l-.073.006c-.144.011-.29.017-.438.017-1.172 0-2.235-.354-3.102-.943-.897.602-1.961.943-3.101.943-.148 0-.294-.006-.438-.017l-.074-.006c-.468-.033-.924-.125-1.361-.26-.215-.066-.333-.295-.267-.51.064-.212.29-.33.506-.267 1.678.514 3.45.026 4.616-1.14.049-.05.118-.077.188-.077s.137.027.186.076c1.14 1.143 2.867 1.646 4.515 1.152.212-.065.439.045.505.253.069.21-.037.434-.301.513z"></path>
                      </svg>
                    </div>
                    <span className="text-sm">trailblazer/wasim9</span>
                  </a>
                  
                  <div className="flex items-center py-1 text-gray-700 dark:text-gray-300">
                    <div className="w-8 h-8 rounded-full bg-salesforce-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-4 w-4 text-salesforce-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm">Kolkata, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-salesforce-navy dark:text-white mb-6">Professional Summary</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            A Salesforce Developer with about 3 years of experience and 3 certifications , specializing in Sales, Service, and Experience Clouds. Expertise in
            Lightning Web Components (LWC) , Apex, Flows, REST & SOAP API and Visualforce. Skilled in deployment using Change Sets and tools like JIRA and Confluence.
            
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Adept at collaborating with teams, delivering innovative solutions, and following Salesforce best practices. Committed to leveraging emerging trends to provide
            tailored, efficient business solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center px-5 py-2.5 bg-salesforce-blue text-white font-medium rounded-lg transition-colors hover:bg-salesforce-navy"
              >
                View My Work
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              
              <a 
                href="/Wasim_SPR.pdf" 
                download="Wasim_Ansari_Resume.pdf"
                className="inline-flex items-center px-5 py-2.5 text-salesforce-blue border border-salesforce-blue font-medium rounded-lg hover:bg-salesforce-blue hover:text-white transition-colors"
              >
                Resume
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 