import React from 'react';
import OfferCard from './OfferCard';
import { offer } from '../data/offer';

const PromotionsAndOffers = () => {
  return (
    <section className="bg-yellow-50 py-12 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          🔥 Limited Time Offers!
        </h2>
        <p className="text-gray-600 mb-8">
          Don’t miss out on these exclusive deals and discounts.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offer.map((offer, index) => (
            <OfferCard key={index} title={offer.title} description={offer.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsAndOffers;
