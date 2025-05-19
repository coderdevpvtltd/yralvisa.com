import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HomePageComponents/HeroSection';
import FilterTabs from '../components/HomePageComponents/FilterTabs';
import VisaCard from '../components/HomePageComponents/VisaCard';

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [visaData, setVisaData] = useState([]);
  const [loading, setLoading] = useState(false);
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

  // Dummy visa data
  const dummyVisaData = [
    {
      id: 1,
      country: "United Arab Emirates",
      price: "6,500",
      date: "Get on 21 May, 01:30 AM",
      visaCount: "53K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Popular"
    },
    {
      id: 2,
      country: "Thailand",
      price: "1",
      date: "Get on 19 May, 12:04 PM",
      visaCount: "32K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Popular"
    },
    {
      id: 3,
      country: "Switzerland",
      price: "3,600",
      date: "Get by 13 Jun, 12:00 AM",
      visaCount: "30K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Europe"
    },
    {
      id: 4,
      country: "Vietnam",
      price: "2,150",
      date: "Get on 23 May, 08:08 AM",
      visaCount: "27K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Asia"
    },
    {
      id: 5,
      country: "Singapore",
      price: "3,500",
      date: "Get on 02 Jun, 10:08 PM",
      visaCount: "11K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Asia"
    },
    {
      id: 6,
      country: "Malaysia",
      price: "4,200",
      date: "Get on 25 May, 03:15 PM",
      visaCount: "19K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Asia"
    },
    {
      id: 7,
      country: "United Kingdom",
      price: "10,500",
      date: "Get by 16 Jun, 11:30 AM",
      visaCount: "40K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Europe"
    },
    {
      id: 8,
      country: "Bali",
      price: "3,900",
      date: "Get on 28 May, 09:00 AM",
      visaCount: "22K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Asia"
    },
    {
      id: 9,
      country: "Australia",
      price: "12,000",
      date: "Get by 05 Jun, 02:30 PM",
      visaCount: "15K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Popular"
    },
    {
      id: 10,
      country: "Japan",
      price: "8,100",
      date: "Get by 10 Jun, 04:45 PM",
      visaCount: "25K+ Visas on Time",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Asia"
    }
  ];

  useEffect(() => {
    // Set dummy data instead of fetching from API
    setVisaData(dummyVisaData);
    
    // Uncomment this when you're ready to fetch from your backend
    /*
    setLoading(true);
    fetch(`${'http://localhost:5000'}/api/cards`)
      .then(res => res.json())
      .then(data => {
        setVisaData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    */
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