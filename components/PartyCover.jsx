'use client';
import { motion } from 'framer-motion';
import { Ticket, Star, Heart } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';

// Konfeti khusus cover (di atas latar cover).
const COLORS = ['#ff4d8d', '#7c3aed', '#ffd23f', '#22c55e', '#38bdf8'];
const PIECES = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 10) * 0.5,
  dur: 4 + (i % 5),
  color: COLORS[i % COLORS.length],
  size: 7 + (i % 4) * 2,
  round: i % 3 === 0,
}));

// Sampul "Confetti Pop Party" (porting Stitch) — angka usia raksasa + party pass.
export default function PartyCover({ onOpen }) {
  const guest = useGuestName();
  const { person, opening } = config;

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-y-auto bg-cream"
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      {/* Konfeti */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {PIECES.map((p, i) => (
          <span key={i} className="absolute top-0" style={{
            left: `${p.left}%`, width: p.size, height: p.size, background: p.color,
            borderRadius: p.round ? '9999px' : '2px',
            animation: `confetti-fall ${p.dur}s linear ${p.delay}s infinite`,
          }} />
        ))}
      </div>

      <div className="relative z-10 flex min-h-full flex-col items-center justify-between px-6 py-12 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
          className="hard-shadow-sm inline-block -rotate-3 rounded-full bg-gold px-5 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-ink"
        >
          Kamu Diundang!
        </motion.span>

        {/* Angka usia raksasa */}
        <div className="relative flex w-full flex-1 items-center justify-center">
          <div className="absolute h-56 w-56 rounded-full bg-rose/30 blur-3xl" />
          <div className="absolute h-56 w-56 translate-x-10 -translate-y-8 rounded-full bg-rose-deep/30 blur-3xl" />
          <motion.h1
            initial={{ opacity: 0, scale: 0.7, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ delay: 0.25, duration: 0.7, type: 'spring' }}
            className="text-hard-shadow relative z-10 font-display text-[7rem] font-extrabold leading-none text-rose sm:text-[9rem]"
          >
            {person.age}
          </motion.h1>
          <Star size={34} className="absolute right-8 top-10 animate-spin text-gold [animation-duration:3s]" />
          <Heart size={30} className="absolute bottom-16 left-8 animate-bounce fill-rose text-rose" />
        </div>

        {/* Detail */}
        <div className="z-10 w-full space-y-4">
          <h2 className="hard-shadow inline-block rotate-2 bg-blush px-5 py-2 font-display text-2xl font-extrabold text-ink">
            Pesta {person.name}
          </h2>
          <p className="mx-auto max-w-xs rounded-lg border-2 border-dashed border-rose/40 bg-cream/70 p-2.5 text-sm font-semibold text-muted">
            {opening.tagline}
          </p>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted">Spesial untuk</p>
            <p className="text-base font-extrabold text-ink">{guest}</p>
          </div>
        </div>

        {/* Tombol */}
        <motion.button
          whileTap={{ scale: 1.15 }}
          onClick={onOpen}
          className="hard-shadow animate-pulse-scale mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-rose py-4 font-display text-lg font-extrabold text-cream transition-colors hover:bg-rose-deep active:translate-y-1 active:shadow-[2px_2px_0_var(--color-ink)]"
        >
          <Ticket size={22} /> Get Your Party Pass
        </motion.button>
      </div>
    </motion.section>
  );
}
