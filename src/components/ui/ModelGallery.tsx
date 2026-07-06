'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap, Gauge, Thermometer, Fuel } from 'lucide-react';
import { bmwModels, modelCategories, type ModelCategory } from '@/lib/bmwModels';
import { cn } from '@/lib/utils';

export function ModelGallery() {
  const [activeCategory, setActiveCategory] = useState<ModelCategory>('All');
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = activeCategory === 'All'
    ? bmwModels
    : bmwModels.filter((m) => m.category === activeCategory);

  const current = filtered[activeIndex] || bmwModels[0];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % filtered.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">The Lineup</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Discover Your<span className="text-gradient"> BMW</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {modelCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setActiveIndex(0); }}
            className={cn(
              'px-5 py-2 text-sm font-medium rounded-full transition-all duration-300',
              activeCategory === cat
                ? 'bg-accent text-white'
                : 'bg-white/5 text-muted hover:text-foreground hover:bg-white/10 border border-white/10'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="model-card p-6 sm:p-8 lg:p-10"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs uppercase tracking-widest text-accent mb-2">{current.model}</p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{current.name}</h3>
                <p className="text-lg text-muted mb-6">{current.tagline}</p>
                <p className="text-sm text-muted leading-relaxed mb-8">{current.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: Zap, label: 'Power', value: current.power },
                    { icon: Gauge, label: '0-60', value: current.acceleration },
                    { icon: Thermometer, label: 'Top Speed', value: current.topSpeed },
                    { icon: Fuel, label: 'From', value: current.price },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-white/5">
                      <stat.icon size={16} className="mx-auto mb-1 text-accent" />
                      <p className="text-sm font-semibold">{stat.value}</p>
                      <p className="text-xs text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mb-8">
                  {current.colors.map((color) => (
                    <div
                      key={color.name}
                      className="w-8 h-8 rounded-full border-2 border-white/20 cursor-pointer hover:border-accent transition-colors"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {current.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a href="#booking" className="btn-primary inline-flex">
                  Book Test Drive
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-bmw-blue/20 via-transparent to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-full max-w-sm mx-auto">
                      <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none">
                        <rect x="40" y="60" width="320" height="80" rx="20" fill="currentColor" className="text-bmw-blue/80" />
                        <rect x="80" y="40" width="180" height="50" rx="15" fill="currentColor" className="text-white/70 dark:text-white/30" />
                        <ellipse cx="110" cy="145" rx="30" ry="30" fill="currentColor" className="text-black/60 dark:text-white/30" />
                        <ellipse cx="290" cy="145" rx="30" ry="30" fill="currentColor" className="text-black/60 dark:text-white/30" />
                        <rect x="35" y="95" width="15" height="55" rx="5" fill="currentColor" className="text-black/40" />
                        <rect x="350" y="95" width="15" height="55" rx="5" fill="currentColor" className="text-black/40" />
                        <circle cx="280" cy="80" r="15" fill="currentColor" className="text-accent/60" />
                        <rect x="60" y="70" width="10" height="25" rx="3" fill="currentColor" className="text-accent/50" />
                        <rect x="330" y="70" width="10" height="15" rx="3" fill="currentColor" className="text-red-500/60" />
                        <rect x="220" y="50" width="40" height="5" rx="2" fill="currentColor" className="text-accent/50" />
                        <rect x="100" y="70" width="120" height="5" rx="2" fill="currentColor" className="text-white/30" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
            aria-label="Previous model"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  i === activeIndex ? 'bg-accent w-6' : 'bg-white/20 hover:bg-white/40'
                )}
                aria-label={`Go to model ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all duration-300"
            aria-label="Next model"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}