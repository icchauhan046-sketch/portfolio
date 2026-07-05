import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Terminal } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none dark:bg-primary-500/5 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accentCyan/10 rounded-full blur-[120px] pointer-events-none dark:bg-accentCyan/5 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <motion.div 
            className="md:col-span-7 flex flex-col justify-center text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Pill */}
            <motion.div 
              className="inline-flex items-center self-center md:self-start space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-100/50 text-primary-700 border border-primary-200/40 dark:bg-primary-500/10 dark:text-primary-300 dark:border-primary-500/10 mb-6"
              variants={itemVariants}
            >
              <Terminal size={14} className="animate-pulse" />
              <span>Web Developer</span>
            </motion.div>

            {/* Greeting */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
              variants={itemVariants}
            >
              <span className="text-slate-900 dark:text-white">Hello, I'm </span>
              <span className="bg-gradient-to-r from-primary-500 to-accentCyan bg-clip-text text-transparent glow-text-primary">
                Ishan Chauhan
              </span>
            </motion.h1>

            {/* Titles / Typewriting simulator */}
            <motion.h2 
              className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6"
              variants={itemVariants}
            >
              Web Developer & IT Diploma Student
            </motion.h2>

            {/* Resume Bio summary */}
            <motion.p 
              className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mb-8 leading-relaxed mx-auto md:mx-0"
              variants={itemVariants}
            >
              I am a passionate Information Technology student dedicated to web development. I focus on building clean, fast, and user-friendly web interfaces using HTML, CSS, and JavaScript.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4"
              variants={itemVariants}
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-600 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/35 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
              >
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>
              
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/50 dark:bg-slate-800/40 dark:hover:bg-slate-800/80 dark:text-slate-200 dark:border-slate-700/50 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
              >
                <MessageSquare size={16} />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Avatar Side */}
          <div className="md:col-span-5 flex justify-center items-center">
            <motion.div 
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
            >
              {/* Spinning Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/40 animate-[spin_40s_linear_infinite] dark:border-primary-500/20"></div>
              
              {/* Outer Glow / Float backdrop */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-500/10 to-accentCyan/10 blur-xl animate-float"></div>

              {/* Avatar Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900 group hover-card-trigger">
                <img 
                  src="/developer_avatar.jpg" 
                  alt="Chauhan Ishan Portrait" 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback in case the image fails to load
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500";
                  }}
                />
              </div>

              {/* Floating tech badge 1 */}
              <div className="absolute top-8 -left-4 bg-white dark:bg-slate-800 shadow-lg px-3 py-1.5 rounded-2xl flex items-center space-x-2 border border-slate-100 dark:border-slate-700/50 animate-float" style={{ animationDelay: '1s' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">JavaScript</span>
              </div>

              {/* Floating tech badge 2 */}
              <div className="absolute bottom-16 -right-4 bg-white dark:bg-slate-800 shadow-lg px-3 py-1.5 rounded-2xl flex items-center space-x-2 border border-slate-100 dark:border-slate-700/50 animate-float" style={{ animationDelay: '3.5s' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">React.js</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
