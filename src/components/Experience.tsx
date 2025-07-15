import React, { useEffect, useRef } from 'react';

const Experience: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Set underline width to match heading width
    if (headingRef.current && underlineRef.current) {
      const headingWidth = headingRef.current.offsetWidth;
      underlineRef.current.style.width = `${headingWidth}px`;
    }
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative inline-block mb-12">
          <h2 ref={headingRef} className="text-3xl font-bold text-salesforce-navy dark:text-white pb-2">
            Professional Experience
          </h2>
          <span ref={underlineRef} className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00A1E0] to-[#6452E9]"></span>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-[#00A1E0]/30 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24">
            {/* TCS Experience */}
            <div className="md:grid md:grid-cols-2 md:gap-12 relative">
              {/* Timeline dot - now positioned outside card, aligned with row */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-10 w-5 h-5 rounded-full bg-[#00A1E0] shadow-md z-10 hidden md:block"></div>
              
              <div className="md:col-start-2 md:pl-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-l-4 border-[#00A1E0] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center mb-3 md:mb-0">
                      <div className="p-2 bg-[#00A1E0]/10 rounded-full mr-3">
                        <svg className="h-6 w-6 text-[#00A1E0]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zM5 22c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-salesforce-navy dark:text-white">TATA CONSULTANCY SERVICES</h3>
                        <p className="text-[#00A1E0] font-semibold">SYSTEM ENGINEER</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Current
                      </span>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">Feb 2025 – Present</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Kolkata, IN | On-Site</span>
                  </div>
                  
                  <ul className="mt-4 space-y-3">
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#00A1E0] flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Working for a US Based Healthcare equipment manufacturing company. Customizing their business requirements using Lightning Web Components. The project is based on Apttus CPQ streamlining the Sales proces over Sales & Service Cloud.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Hexaware Experience */}
            <div className="md:grid md:grid-cols-2 md:gap-12 relative">
              {/* Timeline dot - now positioned outside card, aligned with row */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-10 w-5 h-5 rounded-full bg-[#00A1E0] shadow-md z-10 hidden md:block"></div>
              
              <div className="md:col-start-1 md:pr-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-l-4 border-[#00A1E0] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center mb-3 md:mb-0">
                      <div className="p-2 bg-[#00A1E0]/10 rounded-full mr-3">
                        <svg className="h-6 w-6 text-[#00A1E0]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zM5 22c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-salesforce-navy dark:text-white">HEXAWARE TECHNOLOGIES</h3>
                        <p className="text-[#00A1E0] font-semibold">SALESFORCE DEVELOPER</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        2+ Years
                      </span>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">June 2022 – Feb 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Bangaluru, IN | WFH</span>
                  </div>
                  
                  <ul className="mt-4 space-y-3">
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#00A1E0] flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Implemented Sales, Service & Community Cloud for clients using LWCs, Flows, & various other automations.</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#00A1E0] flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Migrated a UK clinical company's legacy system to Salesforce using LWCs, triggers, batches, and managing Profiles and Permission Sets.</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-[#00A1E0] flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Enhanced a US pharmaceutical company's system with automation and batch processing.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 