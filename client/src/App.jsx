import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useLocalStorage('theme-dark', true);

  // Synchronize document classes with theme state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-lightBg text-slate-800 dark:bg-darkBg dark:text-slate-100 transition-colors duration-300 antialiased font-sans">
      {/* Sticky blurred navigation bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content layouts */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer copyright and links */}
      <Footer />
    </div>
  );
}
