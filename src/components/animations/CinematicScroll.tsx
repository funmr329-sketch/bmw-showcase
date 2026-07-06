'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Unleash Performance',
    subtitle: 'M5 Competition',
    description: '627 horsepower. 0-60 in 3.1 seconds. The ultimate expression of M engineering.',
    color: 'from-red-600 via-red-500 to-orange-400',
    stats: [
      { label: 'Horsepower', value: '627 hp' },
      { label: '0-60 mph', value: '3.1s' },
      { label: 'Top Speed', value: '190 mph' },
    ],
  },
  {
    title: 'Luxury Redefined',
    subtitle: 'M760i xDrive',
    description: 'Handcrafted materials, V12 power, and an unparalleled level of comfort.',
    color: 'from-amber-600 via-yellow-500 to-accent',
    stats: [
      { label: 'Engine', value: 'V12' },
      { label: 'Power', value: '544 hp' },
      { label: 'Torque', value: '553 lb-ft' },
    ],
  },
  {
    title: 'Electric Future',
    subtitle: 'i7 xDrive',
    description: 'Zero emissions, infinite luxury. The future of mobility is here.',
    color: 'from-blue-600 via-cyan-500 to-green-400',
    stats: [
      { label: 'Range', value: '330 mi' },
      { label: 'Power', value: '536 hp' },
      { label: 'Charging', value: '80% in 34 min' },
    ],
  },
];

export function CinematicScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;
    if (!container || !pin) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.scroll-panel');

      panels.forEach((panel, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });

        tl.fromTo(
          panel.querySelector('.panel-title'),
          { opacity: 0, y: 60, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1 }
        )
          .fromTo(
            panel.querySelector('.panel-stats'),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.4'
          )
          .fromTo(
            panel.querySelector('.panel-desc'),
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            '-=0.6'
          );
      });

      ScrollTrigger.create({
        trigger: pin,
        start: 'top top',
        end: '+=300%',
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div ref={pinRef} className="relative h-screen overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className="scroll-panel absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center px-4 max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0, letterSpacing: '0.5em' }}
                whileInView={{ opacity: 1, letterSpacing: '0.1em' }}
                transition={{ duration: 1 }}
                className="panel-title text-sm sm:text-base uppercase tracking-[0.3em] text-muted mb-4"
              >
                {section.subtitle}
              </motion.p>

              <h2 className={`panel-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                {section.title}
              </h2>

              <p className="panel-desc mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
                {section.description}
              </p>

              <div className="panel-stats mt-10 flex flex-wrap justify-center gap-8 sm:gap-12">
                {section.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-muted uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}