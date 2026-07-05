import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, Globe } from 'lucide-react';

const experienceData = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed / Student Projects',
    period: '2024 - Present',
    highlight: 'Building clean, modern, and fully responsive frontend layouts for personal and academic projects.',
    icon: <Briefcase className="text-primary-600 dark:text-primary-400" />,
    details: [
      'Design and deploy custom web solutions using HTML, CSS, JavaScript, and PHP.',
      'Construct semantic web layouts optimized for responsiveness, speed, and cross-browser support.',
      'Integrate simple database connections (MySQL) and RESTful API endpoints for dynamic content handling.'
    ]
  },
  {
    role: 'Team Leader',
    company: 'Ideathon 2024 (Emergency Response App)',
    period: '2024',
    highlight: 'Concept development, system design, and competitive pitch preparation.',
    icon: <Award className="text-orange-500" />,
    details: [
      'Led a team of three to sketch, architect, and design an Emergency Response App concept.',
      'Created wireframes and interactive mockups focusing on user location sharing and emergency service triggers.',
      'Presented the final concept slides and live pitch successfully to the jury panel.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'University Portal Website Project',
    period: '2024',
    highlight: 'Designing and engineering user-facing educational pages and backend routing.',
    icon: <Globe className="text-cyan-500" />,
    details: [
      'Engineered a multi-page local portal for Shreyarth University using HTML, CSS, JavaScript, and PHP.',
      'Built forms and routing scripts for Student Registration and User Login portals.',
      'Developed intuitive, responsive navigation bars and layout grids for student access portals.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/30 relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-accentCyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Work & Projects</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accentCyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800/80 ml-4 sm:ml-8 space-y-12 pb-4">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 sm:pl-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline Icon Marker */}
              <span className="absolute -left-[18px] top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-slate-950 border-2 border-primary-500 shadow-md">
                {item.icon}
              </span>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-xl hover-card-trigger bg-white dark:bg-slate-950/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h4>
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">{item.company}</p>
                  </div>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 self-start sm:self-center">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 italic">{item.highlight}</p>

                {/* Details list */}
                <ul className="space-y-3.5">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
