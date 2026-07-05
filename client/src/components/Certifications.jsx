import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Palette, Target } from 'lucide-react';

const certs = [
  {
    title: 'IDEATHON 2024',
    provider: 'Innovation & Pitching Competition',
    desc: 'Awarded for presenting the Emergency Response App concept, demonstrating effective leadership and pitching skills.',
    icon: <Target className="text-orange-500" />
  },
  {
    title: 'Cyber Security & Ethical Hacking Workshop',
    provider: 'Technical Workshop',
    desc: 'Completed specialized learning program focused on network penetration, ethical hacking, and cyber threats.',
    icon: <ShieldCheck className="text-emerald-500" />
  },
  {
    title: 'Web Design & Development',
    provider: 'Design & Frontend Program',
    desc: 'Certification of completion in UI layouts creation, styling templates, and full responsive web applications structure.',
    icon: <Palette className="text-cyan-500" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">Certifications</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Credentials & Workshops</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accentCyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certs Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certs.map((cert, index) => (
            <motion.div 
              key={index} 
              className="glass-panel p-8 rounded-3xl hover-card-trigger shadow-xl flex flex-col justify-between bg-white dark:bg-slate-950"
              variants={cardVariants}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 shadow-inner border border-slate-100 dark:border-slate-800">
                  {cert.icon}
                </div>
                
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {cert.title}
                </h4>
                
                <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                  {cert.provider}
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {cert.desc}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase border-t border-slate-100 dark:border-slate-900 pt-4">
                <Award size={14} className="text-primary-500" />
                <span>Verified Completion</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
