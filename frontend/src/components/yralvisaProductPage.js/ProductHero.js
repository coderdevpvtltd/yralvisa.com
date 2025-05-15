import React from 'react';
import { motion } from 'framer-motion';

// ProductHero Component
const ProductHero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen relative overflow-hidden flex flex-col justify-center items-center pb-16">
      {/* Logo in top left */}
      <div className="absolute top-8 left-8 z-10">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">yralvisa</h1>
          <span className="text-xs ml-1 mt-1">visas on<br />time</span>
        </div>
      </div>
      
      {/* User icon in top right */}
      <div className="absolute top-8 right-8 z-10">
        <div className="bg-gray-700 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
      
      {/* Hero content */}
      <motion.div 
        className="text-center z-10 px-4 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Introducing yralvisa
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The yralvisa forex card gives you the best rates and spending power,
          <br />making you feel like a local on every trip
        </motion.p>
      </motion.div>
      
      {/* Animated coins */}
      <div className="w-full h-64 mt-12 relative">
        <motion.div 
          className="absolute left-1/4 transform -translate-x-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="w-40 h-40 bg-blue-900 rounded-full border border-blue-400 relative overflow-hidden flex items-center justify-center">
            <div className="absolute w-full h-full bg-gradient-to-tr from-transparent via-blue-600/30 to-blue-400/50"></div>
            <div className="w-1/2 h-1/2 flex items-center justify-center">
              <div className="w-full h-0.5 bg-white rotate-45"></div>
              <div className="w-full h-0.5 bg-white -rotate-45 absolute"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-40 h-40 bg-blue-900 rounded-full border border-blue-400 relative overflow-hidden flex items-center justify-center">
            <div className="absolute w-full h-full bg-gradient-to-tr from-transparent via-blue-600/30 to-blue-400/50"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute left-3/4 transform -translate-x-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-40 h-40 bg-blue-900 rounded-full border border-blue-400 relative overflow-hidden flex items-center justify-center">
            <div className="absolute w-full h-full bg-gradient-to-tr from-transparent via-blue-600/30 to-blue-400/50"></div>
            <div className="text-center text-white/80 font-semibold text-lg">yralvisa</div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ProductHero;
