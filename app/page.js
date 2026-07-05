'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Decorations from '@/components/Decorations';
import PartyCover from '@/components/PartyCover';
import Hero from '@/components/Hero';
import TicketPass from '@/components/TicketPass';
import CountdownTimer from '@/components/CountdownTimer';
import Wishlist from '@/components/Wishlist';
import Gallery from '@/components/Gallery';
import MapEmbed from '@/components/MapEmbed';
import RSVPForm from '@/components/RSVPForm';
import WishesForm from '@/components/WishesForm';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [opened, setOpened] = useState(false);

  const handleRSVP = (data) => {
    // TODO: kirim ke backend/Firebase
    console.log('RSVP:', data);
  };

  return (
    <main>
      <Decorations />

      <AnimatePresence>
        {!opened && <PartyCover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <div className="relative z-10">
          <Hero />
          <TicketPass />
          <CountdownTimer />
          <Wishlist />
          <Gallery />
          <MapEmbed />
          <RSVPForm onSubmit={handleRSVP} />
          <WishesForm />
          <Footer />
          <MusicPlayer playing={opened} />
        </div>
      )}
    </main>
  );
}
