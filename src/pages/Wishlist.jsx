import React, { useContext } from 'react';
import { AppContext } from '../App';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wishlist = () => {
  const { wishlist } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 text-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">Your Wishlist</h2>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center text-lg mt-20">🫤 Your wishlist is empty.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Wishlist;
