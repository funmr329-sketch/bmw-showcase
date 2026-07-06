'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setVisible(v > 0.02 && v < 0.98);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-bmw-blue via-accent to-bmw-red"
      style={{ scaleX, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}