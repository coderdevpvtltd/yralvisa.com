// src/components/VisaCardList.js
import React from 'react';
import VisaCard from './VisaCard';

const VisaCardList = ({ visaData }) => (
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {visaData.map((item, index) => (
        <div key={index} className="mb-4">
          <VisaCard data={item} />
        </div>
      ))}
    </div>
  </div>
);

export default VisaCardList;