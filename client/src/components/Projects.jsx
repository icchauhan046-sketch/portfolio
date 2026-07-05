import React from 'react';
import { motion } from 'framer-motion';
import { Users, Layout, ExternalLink, Award, FileText } from 'lucide-react';

const projects = [
  {
    title: 'Emergency Response App',
    category: 'Concept & Team Presentation',
    scope: 'Ideathon 2024 Project',
    role: 'Team Leader',
    image: '/DOC-20241217-WA0000._page-0001.jpg',
    tech: ['Figma', 'System Design', 'Emergency UX'],
    icon: <Award className="text-orange-500" />,
    bullets: [
      'Led a team of three members to design and present a comprehensive Emergency Response App Concept at Ideathon 2024.',
      'Effectively explained the core idea and architecture to the jury, showcasing leadership and communication skills.'
    ]
  },
  {
    title: 'University Website Development',
    category: 'Web Development',
    scope: 'Live Development',
    role: 'Full Stack Developer',
    image: '/Screenshot 2026-07-05 171510.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    icon: <Layout className="text-cyan-500" />,
    bullets: [
      'Created a multi-page local website for Shreyarth University using HTML, CSS, and basic JavaScript.',
      'Designed and engineered user-focused pages including Login portal, Student Registration form, and Quick Academic Links.',
      'Maintained a clean, modern layout and user-friendly site navigation for an enhanced student experience.'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">My Projects</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Selected Works</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accentCyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col justify-between glass-panel rounded-3xl overflow-hidden hover-card-trigger shadow-xl bg-white dark:bg-slate-950"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden group border-b border-slate-200/50 dark:border-slate-800/80">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60"></div>
                  
                  {/* Category Badge overlay */}
                  <span className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-sm border border-white/10">
                    {project.icon}
                    <span>{project.scope}</span>
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-8">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                      <Users size={12} className="mr-1" />
                      Role: {project.role}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    {project.title}
                  </h4>

                  {/* Bullets lists strictly from resume */}
                  <ul className="space-y-3.5 mb-8">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 shrink-0"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="px-8 pb-8 pt-4 border-t border-slate-100 dark:border-slate-900 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-bold text-slate-400 uppercase mr-2">Tech:</span>
                {project.tech.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
