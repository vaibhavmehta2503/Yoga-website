import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(inputValue); 
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search products..."
        className="w-full rounded-full py-2.5 px-5 pr-12 text-sm text-gray-800 placeholder-gray-400 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition duration-200"
      />
      <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-500 text-lg pointer-events-none" />
    </div>
  );
};

export default SearchBar;
