// src/components/VisaCard.js
import React from 'react';

const VisaCard = ({ data }) => (
  <div className="shadow-sm border-0 rounded-2xl mx-2 bg-white overflow-hidden">
    <img
      src={data.image}
      alt={data.country}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h5 className="text-lg font-medium">{data.country}</h5>
      <p className="text-gray-500 mb-1">
        Get on <strong className="text-blue-600">{data.dateTime}</strong>
      </p>
      <h6 className="font-bold">₹{data.price}</h6>
      <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mt-2">
        {data.visaCount}+ Visas on Time via Yralvisa.com
      </span>
    </div>
  </div>
);

export default VisaCard;