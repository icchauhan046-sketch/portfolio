import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    institution: 'Shreyarth University',
    degree: 'Diploma in Information Technology',
    period: '2024 - Present',
    details: [
      { label: 'Semester 1', value: '8.90 SPI' },
      { label: 'Semester 2', value: '9.10 SPI' },
      { label: 'Semester 3', value: '9.40 SPI' },
      { label: 'Semester 4', value: 'Completed' },
      { label: 'Semester 5', value: 'Currently Pursuing' }
    ],
    highlight: 'Academic Focus on Computer Networks, Web Technologies, and Database Management.'
  },
  {
    institution: 'New Samarth English School',
    degree: '10th Grade (SSC)',
    period: '2023 - 2024',
    details: [
      { label: 'Final SSC Percentage', value: '72.33 %' }
    ],
    highlight: 'Secondary School Education completion with focused languages and science foundation.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-darkBg relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-accentCyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">Education</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Academic Qualifications</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accentCyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800/80 ml-4 sm:ml-8 space-y-12 pb-4">
          {educationData.map((item, index) => (
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
                <GraduationCap size={16} className="text-primary-600 dark:text-primary-400" />
              </span>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-xl hover-card-trigger bg-white dark:bg-slate-950/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.institution}</h4>
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">{item.degree}</p>
                  </div>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 self-start sm:self-center">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 italic">{item.highlight}</p>

                {/* Score details grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60">
                  {item.details.map((score, sIdx) => (
                    <div key={sIdx} className="text-center sm:text-left border-r last:border-0 border-slate-200/50 dark:border-slate-800/60 pr-2">
                      <div className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase mb-0.5">{score.label}</div>
                      <div className="text-sm font-bold text-slate-800 dark:text-white">{score.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
