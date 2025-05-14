import React from 'react';
import { motion } from 'framer-motion';

const StepCard = ({ number, title, description }) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl p-8 flex-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="text-6xl font-bold text-blue-500">{number}</div>
      </div>
    </motion.div>
  );
};

const GettingStarted = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Getting Started with yralvisa
      </motion.h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <StepCard 
          number="01" 
          title="Receive yralvisa" 
          description="We deliver the yralvisa forex card at your door within 1 day"
        />
        <StepCard 
          number="02" 
          title="Activate yralvisa online" 
          description="No paperwork, instant activation online, ready to load and use"
        />
      </div>
      
      <div className="max-w-6xl mx-auto mt-6">
        <motion.div 
          className="bg-blue-600 rounded-xl p-8 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <div className="flex items-center">
              <div className="text-6xl font-bold text-white">03</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-3">Use yralvisa worldwide</h3>
                <p className="text-white/80">No downtime, track your usage and reload instantly</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xs text-blue-600 font-semibold">
                     yralvisa
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GettingStarted;