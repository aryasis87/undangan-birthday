'use client';

// Konfeti jatuh di latar (warna-warni). pointer-events-none, deterministik.
const COLORS = ['#ff4d8d', '#7c3aed', '#ffd23f', '#22c55e', '#38bdf8'];
const PIECES = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 10) * 0.6,
  dur: 5 + (i % 5),
  color: COLORS[i % COLORS.length],
  size: 7 + (i % 4) * 2,
  round: i % 3 === 0,
}));

export default function Decorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.round ? '9999px' : '2px',
            animation: `confetti-fall ${p.dur}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
