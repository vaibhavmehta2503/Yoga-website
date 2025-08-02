import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { products } from '../data/product';
import { useNavigate } from 'react-router-dom';

import Top from './Top';
import Logo from './Logo';
import NavLinks from './NavLinks';
import UserActions from './useraction';

const Header = () => {
  const { setSearchQuery } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [showPanel, setShowPanel] = useState(false);
  const navigate = useNavigate();


  const handleSearchInput = (e) => {
  const value = e.target.value;
  setInput(value);

  const query = value.trim().toLowerCase();

  if (query === '') {
  setResults([]);
  setShowPanel(false);
  setSearchQuery(''); 
  return;
}


  setSearchQuery(query);

  const matches = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  setResults(matches);
  setShowPanel(true);
};


  const handleResultClick = (productId) => {
    navigate('/Product');
    setShowPanel(false);
  };

  return (
    <>
      <Top />

      <header className="bg-white shadow-sm py-3 w-full relative z-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <Logo />

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={input}
              onChange={handleSearchInput}
              placeholder="Search products..."
              className="w-full rounded-full py-2.5 px-5 pr-12 text-sm text-gray-800 placeholder-gray-400 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition"
            />
          </div>

          <UserActions />
        </div>

        {/* NavLinks under the header */}
        <div className="border-t mt-3">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <NavLinks />
          </div>
        </div>

        {/* 🔍 Floating Search Results */}
        {showPanel && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[90%] max-w-md bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50">
            {results.length > 0 ? (
              <>
                <h4 className="text-gray-700 font-semibold mb-2">Search Results:</h4>
                <ul>
                  {results.map(product => (
                    <li
                      key={product.id}
                      className="p-2 rounded hover:bg-purple-50 cursor-pointer text-sm"
                      onClick={() => handleResultClick(product.id)}
                    >
                      🛍 {product.name} — ₹{product.price}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-500 text-sm">No matching products found.</p>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
