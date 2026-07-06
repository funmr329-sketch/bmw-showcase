'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gauge, Zap, Thermometer, BatteryCharging, Weight, Cog } from 'lucide-react';

interface SpecItem {
  icon: React.ElementType;
  label: string;
  value: string;
  detail?: string;
}

const specSections = [
  {
    title: 'Performance',
    specs: [
      { icon: Zap, label: 'Engine', value: 'M TwinPower Turbo V8', detail: '4.4-liter' },
      { icon: Gauge, label: 'Horsepower', value: '627 hp', detail: '@ 6,000 rpm' },
      { icon: Thermometer, label: 'Torque', value: '553 lb-ft', detail: '@ 1,800 rpm' },
      { icon: Cog, label: 'Transmission', value: '8-Speed M Steptronic', detail: 'With Drivelogic' },
    ],
  },
  {
    title: 'Dimensions',
    specs: [
      { icon: Weight, label: 'Curb Weight', value: '4,345 lbs' },
      { icon: Gauge, label: 'Length', value: '196.4 in' },
      { icon: Gauge, label: 'Width', value: '74.9 in' },
      { icon: Gauge, label: 'Height', value: '57.6 in' },
    ],
  },
  {
    title: 'Electric (i7)',
    specs: [
      { icon: BatteryCharging, label: 'Battery', value: '105.7 kWh', detail: 'Usable capacity' },
      { icon: Gauge, label: 'Range', value: '330 miles', detail: 'EPA estimated' },
      { icon: Zap, label: 'Power', value: '536 hp', detail: 'Dual motors' },
      { icon: Thermometer, label: 'Charging', value: '80% in 34 min', detail: 'DC Fast Charging' },
    ],
  },
];

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (!isInView || !numValue) return;
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numValue));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, numValue]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function SpecCard({ spec, index }: { spec: SpecItem; index: number }) {
  const Icon = spec.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300"
    >
      <Icon size={18} className="text-accent mb-2" />
      <p className="text-xs text-muted uppercase tracking-wider mb-1">{spec.label}</p>
      <p className="text-base sm:text-lg font-semibold">
        {spec.value.includes('hp') || spec.value.includes('lb-ft') || spec.value.includes('kWh') || spec.value.includes('miles') || spec.value.includes('lbs') || spec.value.includes('in') ? (
          <>
            <AnimatedNumber value={spec.value} />
            {spec.value.replace(/[0-9,]/g, '')}
          </>
        ) : (
          spec.value
        )}
      </p>
      {spec.detail && <p className="text-xs text-muted mt-0.5">{spec.detail}</p>}
    </motion.div>
  );
}

export function Specifications() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Technical Excellence</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Specifications<span className="text-gradient"> That Matter</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {specSections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              {section.title}
            </h3>
            <div className="grid gap-3">
              {section.specs.map((spec, j) => (
                <SpecCard key={spec.label} spec={spec} index={j} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}