import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand/Logo */}
          <div className="text-center md:text-left">
            <a 
              href="#home" 
              onClick={handleScrollToTop}
              className="text-xl font-bold tracking-tight text-white"
            >
              Ishan
            </a>
            <p className="text-xs text-slate-500 mt-1">IT Student & Aspiring Web Developer</p>
          </div>

          {/* Social / Contact Icons shortcut */}
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:icchauhan046@gmail.com" 
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              title="Mail Me"
            >
              <Mail size={16} />
            </a>
            <a 
              href="tel:+916352264289" 
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              title="Call Me"
            >
              <Phone size={16} />
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-center md:text-right text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Chauhan Ishan SanjayBhai. All rights reserved.</p>
            <p className="mt-1">Portfolio built using React & Tailwind CSS.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
