// src/components/Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <div className="container mx-auto px-4 py-4 border-b border-gray-200">
      <div className="flex items-center text-gray-600">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="mx-2">›</span>}
            {item.link ? (
              <Link to={item.link} className="hover:text-blue-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;