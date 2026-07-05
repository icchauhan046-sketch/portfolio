import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine background intensity based on scroll position
      setScrolled(window.scrollY > 20);

      // Track current active section
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].name.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-navbar py-3 shadow-lg shadow-slate-900/5 dark:shadow-black/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary-600 to-accentCyan bg-clip-text text-transparent"
          >
            Ishan
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => {
              const linkId = link.name.toLowerCase();
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  id={`nav-link-${linkId}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-desktop"
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Dark Mode Toggle Mobile */}
            <button
              id="theme-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>

            {/* Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed inset-x-0 top-[60px] glass-panel border-t border-slate-200/20 dark:border-slate-800/50 shadow-xl transition-all duration-300 ease-in-out transform ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const linkId = link.name.toLowerCase();
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                id={`nav-link-mobile-${linkId}`}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                  isActive 
                    ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
