import React from 'react';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';
import PrincipalMessage from './PrincipalMessage';
import HighlightsGrid from './HighlightsGrid';
import EventsGrid from './EventsGrid';
import RecognitionGrid from './RecognitionGrid';
import ToppersScroller from './ToppersScroller';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutSection />
        <StatsSection />
        <PrincipalMessage />
        <HighlightsGrid />
        <EventsGrid />
        <RecognitionGrid />
        <ToppersScroller />
      </main>
      <Footer />
    </div>
  );
};

export default Home;