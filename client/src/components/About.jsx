import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, Search } from 'lucide-react';

export default function About() {
  const infoCards = [
    { icon: <User className="text-primary-500" />, label: 'Full Name', value: 'Chauhan Ishan SanjayBhai' },
    { icon: <Calendar className="text-accentCyan" />, label: 'Date of Birth', value: '07/01/2009' },
    { icon: <MapPin className="text-pink-500" />, label: 'Location', value: 'Ahmedabad, Gujarat, India' },
    { icon: <Search className="text-emerald-500" />, label: 'Current Role', value: 'IT Student & Web Developer' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Professional Journey</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accentCyan mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Summary Text Card */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl shadow-xl hover-card-trigger"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Passionate IT Student & Aspiring Web Developer
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I am currently pursuing my diploma in Information Technology. My core academic and personal interest centers around web development, with an emphasis on creating clean, intuitive, and modern user interfaces.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I focus heavily on building semantic, accessible structures and combining them with styled modern layouts to offer responsive desktop and mobile web experiences. I am actively seeking an internship program to acquire hands-on industry experience, collaborate with seasoned engineering teams, and expand my technical capabilities.
              </p>
            </div>

            <div className="border-t border-slate-200/50 dark:border-slate-800/80 pt-6">
              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Education Track</h5>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Shreyarth University (IT Diploma)</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Grid */}
          <motion.div 
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {infoCards.map((card, i) => (
              <div 
                key={i} 
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover-card-trigger"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    {card.label}
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-white leading-tight">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Large full width Address card inside the same section */}
            <div className="col-span-1 sm:col-span-2 glass-panel p-6 rounded-2xl hover-card-trigger">
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Home Address
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                House No - 12, ShaileshPark Society, app.DayalPark Society, near D-mart, Jivrajpark, Ahmedabad - 380051, Gujarat, India.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
