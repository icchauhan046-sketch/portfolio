import React from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Terminal, Shield, Layers, Layout, Cpu } from 'lucide-react';

const languages = [
  { name: 'HTML5', level: 'Advanced', desc: 'Structure and semantics of modern web pages', icon: <Layout className="text-orange-500" /> },
  { name: 'CSS3', level: 'Advanced', desc: 'Responsive designs, layouts, flexbox, and grids', icon: <Layers className="text-blue-500" /> },
  { name: 'Advanced JavaScript', level: 'Advanced', desc: 'Core logic, events, API calls, and DOM manipulation', icon: <Code className="text-yellow-500" /> },
  { name: 'Advanced SQL', level: 'Advanced', desc: 'Database design, querying, and schemas', icon: <Terminal className="text-emerald-500" /> },
  { name: 'Python', level: 'Intermediate', desc: 'Scripting, backend logic, and problem solving', icon: <Cpu className="text-blue-400" /> },
  { name: 'Java', level: 'Basic', desc: 'Object-oriented programming concepts', icon: <Code className="text-red-500" /> },
  { name: 'Advanced PHP', level: 'Advanced', desc: 'Server-side scripting development', icon: <Settings className="text-purple-400" /> },
  { name: 'C Language', level: 'Intermediate', desc: 'Foundational language and procedural logic', icon: <Terminal className="text-slate-400" /> },
];

const tools = [
  { name: 'Figma', level: 'Basic', desc: 'User interface mockups and wireframes design', color: 'border-pink-500/20 text-pink-500 bg-pink-500/5' },
  { name: 'Photoshop', level: 'Basic', desc: 'Graphics asset editing and layout adjustments', color: 'border-blue-500/20 text-blue-400 bg-blue-500/5' },
  { name: 'AI Engineering & Prompting', level: 'Advanced', desc: 'Utilizing AI Tools efficiently and correctly for coding', color: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-darkBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">My Skills</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Technical Toolkit</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accentCyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Section 1: Programming Languages */}
        <div className="mb-16">
          <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center space-x-2">
            <span className="w-1.5 h-6 rounded-full bg-primary-500"></span>
            <span>Programming Languages & Core Web</span>
          </h4>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {languages.map((lang, index) => (
              <motion.div 
                key={index} 
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between hover-card-trigger border border-slate-100 dark:border-slate-800"
                variants={cardVariants}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/80 flex items-center justify-center">
                      {lang.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {lang.level}
                    </span>
                  </div>
                  <h5 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{lang.name}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal">{lang.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 2: Design & Tools */}
        <div>
          <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center space-x-2">
            <span className="w-1.5 h-6 rounded-full bg-accentCyan"></span>
            <span>Design, Editing & Modern Workflow Tools</span>
          </h4>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                className="glass-panel p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover-card-trigger flex flex-col justify-between"
                variants={cardVariants}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${tool.color}`}>
                      {tool.level}
                    </span>
                  </div>
                  <h5 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{tool.name}</h5>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
