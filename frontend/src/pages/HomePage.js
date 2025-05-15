import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HomePageComponents/HeroSection';
import FilterTabs from '../components/HomePageComponents/FilterTabs';
import VisaCardList from '../components/HomePageComponents/VisaList';
import BottomToggle from '../components/HomePageComponents/BottomToggle';

// Data Import
import visaData from '../Datas/visaData';

function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSection scrolled={scrolled} />
      <FilterTabs />
      <VisaCardList visaData={visaData} />
      <BottomToggle />
    </>
  );
}

export default HomePage;