'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '@/lib/data';

const tilts = ['-3deg', '2deg', '-1deg', '3deg', '-2deg', '1deg'];

// Galeri foto ceria (kartu miring) + lightbox.
export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);

  return (
    <section className="relative z-10 bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">Fun Moments</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Galeri</h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.button
              key={src}
              style={{ rotate: tilts[i % tilts.length] }}
              whileHover={{ rotate: '0deg', scale: 1.04 }}
              onClick={() => setActive(src)}
              className="relative h-36 w-full overflow-hidden rounded-2xl border-4 border-cream shadow-md sm:h-44"
              aria-label={`Perbesar foto ${i + 1}`}
            >
              <Image src={src} alt={`Foto ${i + 1}`} fill sizes="(max-width:640px) 50vw, 33vw" className="object-cover" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true"
          >
            <button className="absolute right-5 top-5 text-cream" onClick={() => setActive(null)} aria-label="Tutup">
              <X size={28} />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-lg overflow-hidden rounded-3xl"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active} alt="Foto" fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
