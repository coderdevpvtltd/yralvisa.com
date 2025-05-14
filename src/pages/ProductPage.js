import React, { useEffect } from 'react';
import ProductHero from '../components/yralvisaProductPage.js/ProductHero';
import GettingStarted from '../components/yralvisaProductPage.js/GettingStarted';
import SecurityFeatures from '../components/yralvisaProductPage.js/SecurityFeatures';

import FAQ from '../components/yralvisaProductPage.js/FAQ';
import Footer from '../components/yralvisaProductPage.js/FooterProduct';

const ProductPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add dark background to body
    document.body.style.backgroundColor = '#111827'; // gray-900
    
    return () => {
      // Reset body background when unmounting
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <ProductHero />
      <GettingStarted />
      <SecurityFeatures />
     
      <FAQ />
      <Footer />
    </div>
  );
};

export default ProductPage;
