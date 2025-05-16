import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HomePageComponents/HeroSection';
import FilterTabs from '../components/HomePageComponents/FilterTabs';
import VisaCard from '../components/HomePageComponents/VisaCard';

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [visaData, setVisaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

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

  useEffect(() => {
    setLoading(true);
    fetch(`${'http://localhost:5000'}/api/cards`)
      .then(res => res.json())
      .then(data => {
        setVisaData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredVisaData = activeFilter === 'All'
    ? visaData
    : visaData.filter(visa => visa.category === activeFilter);

  return (
    <>
      <HeroSection scrolled={scrolled} />
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="max-w-[95vw] mx-auto px-1 py-8">
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredVisaData.map((visa, index) => (
              <VisaCard key={index} {...visa} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;