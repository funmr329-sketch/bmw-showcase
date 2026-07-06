'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const videos = [
  { id: '1', title: 'Performance Unleashed', model: 'M5 Competition', desc: 'Experience the raw power of the M5 Competition on track.', src: '/videos/performance.mp4' },
  { id: '2', title: 'Luxury in Motion', model: 'M760i xDrive', desc: 'The pinnacle of luxury meets unparalleled performance.', src: '/videos/luxury.mp4' },
  { id: '3', title: 'Electric Elegance', model: 'i7 xDrive', desc: 'Silent. Powerful. The future of electric luxury.', src: '/videos/electric.mp4' },
  { id: '4', title: 'SAV Dominance', model: 'X7 M60i', desc: 'Command the road with the flagship SAV.', src: '/videos/suv.mp4' },
];

export function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const current = videos[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % videos.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Cinematic Experience</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          See Them<span className="text-gradient"> In Motion</span>
        </h2>
      </motion.div>

      <div className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10">
        <div className="aspect-video relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full bg-gradient-to-br from-bmw-blue/20 via-transparent to-accent/20 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/90 hover:bg-accent transition-all duration-300 flex items-center justify-center group"
                >
                  {isPlaying ? (
                    <Pause size={28} className="text-white ml-0.5" />
                  ) : (
                    <Play size={28} className="text-white ml-1" />
                  )}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs text-accent uppercase tracking-wider">{current.model}</p>
                <h3 className="text-lg sm:text-xl font-semibold">{current.title}</h3>
                <p className="text-sm text-muted mt-1 max-w-lg">{current.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Fullscreen">
              <Maximize size={18} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Previous video"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    i === activeIndex ? 'bg-accent w-6' : 'bg-white/20 hover:bg-white/40'
                  )}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Next video"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}