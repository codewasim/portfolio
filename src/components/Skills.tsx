import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const skills: Skill[] = [
    // Salesforce Skills
    { name: 'Apex', level: 90, category: 'Development' },
    { name: 'Async Apex', level: 88, category: 'Development' },
    { name: 'Lightning Web Components', level: 85, category: 'Development' },
    { name: 'Salesforce Administration', level: 85, category: 'Platform' },
    { name: 'SOQL/SOSL', level: 90, category: 'Development' },
    { name: 'Visualforce', level: 80, category: 'Development' },
    { name: 'Salesforce Integration', level: 85, category: 'Development' },
    { name: 'Sales Cloud', level: 90, category: 'Platform' },
    { name: 'Service Cloud', level: 85, category: 'Platform' },
    { name: 'Experience Cloud', level: 80, category: 'Platform' },
    { name: 'Flow Builder', level: 90, category: 'Automation' },
    { name: 'Process Builder', level: 85, category: 'Automation' },
    { name: 'Apex Triggers', level: 90, category: 'Development' },
    { name: 'Salesforce DX', level: 80, category: 'DevOps' },
    { name: 'Salesforce API', level: 85, category: 'Integration' },
    { name: 'Data Loader', level: 90, category: 'Data Management' },
  ];
  
  const uniqueCategories = Array.from(new Set(skills.map(skill => skill.category)));
  const categories = ['All', ...uniqueCategories];
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-3 text-center text-salesforce-navy dark:text-white">
          Salesforce Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Specialized expertise in Salesforce development, administration, and implementation
        </p>
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-white dark:bg-gray-800 shadow-md flex-wrap justify-center">
            {categories.map(category => (
              <button
                key={category}
                className={`px-5 py-2 m-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-salesforce-blue text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={`${skill.category}-${skill.name}`} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold text-salesforce-navy dark:text-white">{skill.name}</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 rounded-full">
                    {skill.category}
                  </span>
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-salesforce-blue to-salesforce-purple flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {skill.level}%
                </div>
              </div>
              
              <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-salesforce-blue via-salesforce-purple to-blue-500"
                  style={{ 
                    width: `${skill.level}%`,
                    boxShadow: '0 0 10px rgba(1, 118, 211, 0.3)',
                    transition: 'width 1s ease-out'
                  }}
                ></div>
              </div>
              
              <div className="flex mt-4 items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.round(skill.level/20) ? 'text-salesforce-blue' : 'text-gray-300 dark:text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Foundational'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 