import React, { useState, useContext, useEffect, useRef } from 'react';
import { FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const UserActions = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { user, setUser, wishlist, cart } = useContext(AppContext);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({ loggedIn: false });
    setShowProfile(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    if (showProfile) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfile]);

  return (
    <div className="relative flex gap-6 text-sm text-gray-700 items-center">
      {/* Profile Button */}
      <button
        onClick={() => setShowProfile(prev => !prev)}
        className="flex items-center gap-1 hover:text-yellow-600"
      >
        <FiUser className="text-lg" />
        Profile
      </button>

      {/* Wishlist Icon */}
      <button
        onClick={() => navigate('/wishlist')}
        className="relative flex items-center gap-1 hover:text-yellow-600"
      >
        <FiHeart className="text-lg" />
        Wishlist
        {wishlist?.length > 0 && (
          <span className="absolute -top-1 -right-2 text-[10px] bg-pink-500 text-white rounded-full px-1.5">
            {wishlist.length}
          </span>
        )}
      </button>

      {/* Cart Icon */}
      <button
        onClick={() => navigate('/cart')}
        className="relative flex items-center gap-1 hover:text-yellow-600"
      >
        <FiShoppingCart className="text-lg" />
        Cart
        {cart?.length > 0 && (
          <span className="absolute -top-1 -right-2 text-[10px] bg-green-600 text-white rounded-full px-1.5">
            {cart.length}
          </span>
        )}
      </button>

      {/* Profile Dropdown */}
      {showProfile && (
        <div
          ref={profileRef}
          className="absolute top-10 right-0 w-56 bg-white shadow-lg border border-gray-200 rounded-xl z-10 p-4"
        >
          {user?.loggedIn ? (
            <>
              <div className="font-semibold text-gray-800 mb-1">{user.name}</div>
              <div className="text-xs text-gray-500 mb-3">{user.email}</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <a href="#" className="hover:text-indigo-600">My Account</a>
                </li>
                <li>
                  <a href="/Order" className="hover:text-indigo-600">Orders</a>
                </li>
                <li>
                  <button onClick={handleLogout} className="hover:text-red-500">Logout</button>
                </li>
              </ul>
            </>
          ) : (
            <div className="text-center">
  <div className="font-semibold mb-2 text-purple-700 text-lg">Welcome, Guest 👋</div>
  <p className="text-sm text-gray-500 mb-4">Access your account or start your journey:</p>

  <div className="flex flex-col gap-2">
    <button
      onClick={() => {
        navigate('/login');
        setShowProfile(false);
      }}
      className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform shadow-sm"
    >
      Login
    </button>

    <button
      onClick={() => {
        navigate('/signup');
        setShowProfile(false);
      }}
      className="border border-purple-500 text-purple-600 font-medium px-4 py-2 rounded-full text-sm hover:bg-purple-50 transition-all"
    >
      Sign Up
    </button>
  </div>
</div>

          )}
        </div>
      )}
    </div>
  );
};

export default UserActions;
