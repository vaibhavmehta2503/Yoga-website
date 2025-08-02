// components/OfferCard.jsx
import React from 'react';

const OfferCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow group hover:shadow-2xl transition-all duration-300 p-6 border border-yellow-200 hover:border-yellow-400 cursor-pointer transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-2 text-yellow-700 group-hover:text-yellow-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default OfferCard;
