'use client';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import config from '@/lib/data';

// Wishlist kado — ide hadiah yang disukai.
export default function Wishlist() {
  const { wishlist } = config;
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">Gift Wishlist</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Ide Kado 🎁</h2>
        <p className="mt-2 text-sm text-muted">Datangmu sudah cukup, tapi kalau mau bawa kado:</p>

        <div className="mt-7 grid gap-3">
          {wishlist.map((w, i) => (
            <motion.div
              key={w.item}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-2xl bg-cream px-5 py-4 text-left shadow-sm ring-1 ring-rose/15"
            >
              <span className="text-2xl">{w.emoji || <Gift size={22} />}</span>
              <span className="font-semibold text-ink">{w.item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
