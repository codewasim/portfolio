import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Check user's preferred color scheme on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Listen for changes to color scheme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 select-none`}>
      <Header />
      
      {/* Dark Mode Toggle positioned fixed on the page */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      
      <main>
        <Suspense fallback={<div className="flex items-center justify-center py-20"><LoadingSpinner /></div>}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
