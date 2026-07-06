'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const taglines = [
  { text: 'The Ultimate Driving Machine', emphasis: 'Ultimate' },
  { text: 'Born for Performance', emphasis: 'Performance' },
  { text: 'Engineered for Thrills', emphasis: 'Thrills' },
];

export function HeroIntro() {
  const [phase, setPhase] = useState<'logo' | 'hero' | 'complete'>('logo');
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const logoTimeout = setTimeout(() => setPhase('hero'), 1200);
    return () => clearTimeout(logoTimeout);
  }, []);

  useEffect(() => {
    if (phase !== 'hero') return;

    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => {
        if (prev >= taglines.length - 1) {
          clearInterval(taglineInterval);
          setTimeout(() => setPhase('complete'), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(taglineInterval);
  }, [phase]);

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait">
        {phase === 'logo' && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 2.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-center"
          >
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="text-3xl sm:text-5xl font-bold tracking-tighter text-gradient">
                  BMW
                </span>
              </div>
              <div className="absolute -inset-4 rounded-full border border-accent/20 animate-pulse-slow" />
              <div className="absolute -inset-8 rounded-full border border-accent/10 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>
        )}

        {phase === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <motion.p
              key={taglines[currentTagline].emphasis}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              {taglines[currentTagline].text.split(taglines[currentTagline].emphasis).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="text-gradient">{taglines[currentTagline].emphasis}</span>
                  )}
                </span>
              ))}
            </motion.p>

            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-muted max-w-lg mx-auto"
            >
              Discover the perfect blend of performance, luxury, and innovation
            </motion.p>
          </motion.div>
        )}

        {phase === 'complete' && (
          <motion.div
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight"
            >
              <span className="text-gradient">M5 Competition</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-lg sm:text-xl text-muted"
            >
              Experience the pinnacle of performance engineering
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#gallery" className="btn-primary pointer-events-auto cursor-pointer">
                Explore Models
              </a>
              <a href="#booking" className="btn-secondary pointer-events-auto cursor-pointer">
                Book Test Drive
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-muted" />
      </motion.div>
    </div>
  );
}