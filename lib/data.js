// ============================================================
//  KONFIGURASI UNDANGAN — Birthday (Party Pass / Tiket Pesta)
//  Ubah seluruh isi undangan dari satu tempat ini saja.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: "Birthday Party — Kayla's 7th",
    description: "You're invited! Yuk rayakan pesta ulang tahun bersama kami.",
  },

  // -- Teks pembuka --
  opening: {
    greeting: "You're Invited!",
    tagline: "Let's party together!",
  },

  // -- Yang berulang tahun --
  person: {
    name: 'Kayla',
    fullName: 'Kayla Arsyifa',
    age: 7,
    photo: 'https://placehold.co/600x800/ff4d8d/fff6f9.png?text=Birthday+Star',
  },

  // -- Tanggal pesta (ISO) untuk countdown --
  mainDate: '2026-10-10T16:00:00+07:00',

  // -- Detail pesta (jadi "tiket") --
  party: {
    date: 'Sabtu, 10 Oktober 2026',
    time: '16.00 - 19.00 WIB',
    venue: 'Fun World Playground',
    address: 'Mall Central Park Lt. 3, Jakarta',
    dresscode: 'Colorful & Fun',
    seat: 'Bebas',
    start: '2026-10-10T16:00:00+07:00',
    end: '2026-10-10T19:00:00+07:00',
  },

  // -- Lokasi (embed Google Maps) --
  location: {
    label: 'Fun World Playground, Central Park Jakarta',
    mapEmbed: 'https://www.google.com/maps?q=Central+Park+Mall+Jakarta&output=embed',
    mapLink: 'https://maps.google.com/?q=Central+Park+Mall+Jakarta',
  },

  // -- Wishlist kado --
  wishlist: [
    { emoji: '🧸', item: 'Boneka & mainan edukasi' },
    { emoji: '📚', item: 'Buku cerita anak' },
    { emoji: '🎨', item: 'Alat mewarnai & kerajinan' },
    { emoji: '🎁', item: 'Kejutan dari kamu!' },
  ],

  // -- Galeri foto --
  gallery: [
    'https://placehold.co/600x800/ff4d8d/fff6f9.png?text=Foto+1',
    'https://placehold.co/600x800/7c3aed/fff6f9.png?text=Foto+2',
    'https://placehold.co/600x800/ffd23f/2b1733.png?text=Foto+3',
    'https://placehold.co/600x800/7c3aed/fff6f9.png?text=Foto+4',
    'https://placehold.co/600x800/ff4d8d/fff6f9.png?text=Foto+5',
    'https://placehold.co/600x800/ffd23f/2b1733.png?text=Foto+6',
  ],

  // -- Musik latar (taruh file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/song.mp3',
    title: 'Party Song',
  },

  // -- Footer --
  footer: {
    closing: 'Kehadiranmu bikin pesta makin meriah. Sampai jumpa di hari spesial!',
    hashtag: '#KaylaTurns7',
  },
};

export default config;
