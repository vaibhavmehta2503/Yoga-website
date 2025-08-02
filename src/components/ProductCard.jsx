import React, { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { AppContext } from '../App';
import RatingStar from '../components/RatingStar';

function ProductCard({ product }) {
  const { wishlist, toggleWishlist, cart, toggleCart } = useContext(AppContext);

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const inCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    toggleCart(product);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow group hover:shadow-2xl transition-all duration-300 p-5 flex flex-col items-center overflow-hidden cursor-pointer border-2 border-transparent hover:scale-105 hover:border-yellow-200 font-sans">

      
      
      <div
        onClick={() => toggleWishlist(product)}
        className="absolute top-4 right-4 z-30 cursor-pointer"
        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        {isWishlisted ? (
          <FaHeart className="text-pink-500 text-lg hover:scale-110 transition-transform" />
        ) : (
          <FaRegHeart className="text-gray-400 text-lg hover:text-pink-400 hover:scale-110 transition-transform" />
        )}
      </div>

     
      {product.badge && (
        <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow z-20 tracking-wide">
          {product.badge}
        </span>
      )}

     
      <div className="w-[180px] h-[180px] mb-4 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>

      
      <h3 className="font-semibold text-lg mb-1 text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        {product.name}
      </h3>

      
      <RatingStar rating={product.rating} />

      
      <div className="text-black font-extrabold text-xl mb-2">₹{product.price}</div>
      <span className="text-xs text-gray-500 mb-2">{product.category}</span>

      
      <button
        onClick={handleAddToCart}
        className={`mt-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-transform duration-300 text-sm tracking-wide ${
          inCart ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105'
        }`}
      >
        {inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;
