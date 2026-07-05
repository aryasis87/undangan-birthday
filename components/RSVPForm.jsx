'use client';
import { useState } from 'react';
import { PartyPopper } from 'lucide-react';

// Konfirmasi kehadiran gaya pesta (data lokal/dummy).
export default function RSVPForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', attendance: 'hadir', guests: 1 });
  const [done, setDone] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit?.(form);
    setDone(true);
  };

  const field = 'w-full rounded-xl border-2 border-rose/30 bg-cream px-4 py-3 text-sm font-semibold outline-none focus:border-rose';

  return (
    <section className="relative z-10 bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">Are you coming?</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Konfirmasi Kehadiran</h2>

        {done ? (
          <div className="mt-7 rounded-3xl bg-cream p-8 shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose text-cream">
              <PartyPopper size={26} />
            </div>
            <p className="mt-4 font-display text-2xl font-extrabold text-ink">Yay, {form.name}!</p>
            <p className="mt-1 text-sm text-muted">Sampai jumpa di pesta! 🎉</p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 space-y-4 text-left">
            <input name="name" value={form.name} onChange={handle} placeholder="Nama kamu" className={field} required />
            <select name="attendance" value={form.attendance} onChange={handle} className={field}>
              <option value="hadir">Yes, aku datang! 🎉</option>
              <option value="tidak">Maaf, belum bisa</option>
              <option value="ragu">Masih ragu</option>
            </select>
            {form.attendance === 'hadir' && (
              <input type="number" name="guests" min={1} max={10} value={form.guests} onChange={handle} className={field} />
            )}
            <button type="submit" className="w-full rounded-full bg-rose py-3 text-sm font-extrabold text-cream transition hover:bg-rose-deep">
              Kirim Konfirmasi
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
