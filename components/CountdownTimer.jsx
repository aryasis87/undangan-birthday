'use client';
import { motion } from 'framer-motion';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Bubble({ value, label }) {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-cream shadow-lg ring-4 ring-rose/20 md:h-24 md:w-24">
      <span className="font-display text-3xl font-extrabold text-rose-deep md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] font-bold uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}

// Hitung mundur menuju pesta.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(config.mainDate);
  return (
    <section className="relative z-10 bg-blush/40 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-script text-3xl text-rose sm:text-4xl">Party starts in</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          <Bubble value={days} label="Hari" />
          <Bubble value={hours} label="Jam" />
          <Bubble value={minutes} label="Menit" />
          <Bubble value={seconds} label="Detik" />
        </div>
      </motion.div>
    </section>
  );
}
