import React, { useContext } from 'react';
import { AppContext } from '../App';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#fdf4ff] to-[#fefce8] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-16">
            <p>Your cart is feeling empty... 🧘‍♀️</p>
            <Link to="/" className="text-purple-600 underline mt-2 inline-block">Explore Products</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
          
            <div className="md:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow flex items-center justify-between p-4 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl border border-gray-200" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">₹{item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 transition"
                    title="Remove from cart"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Order Summary</h2>
              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-full font-medium hover:scale-105 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
