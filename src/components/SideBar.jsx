import React from 'react';

function SideBar({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
}) {
  return (
    <aside className="bg-[#fefcf8] rounded-2xl shadow-xl p-6 font-sans border border-[#e5e5e0]">
      <h2 className="text-2xl font-bold text-[#3b3b3b] mb-6 tracking-tight" >
         Filters
      </h2>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2 text-sm">
          Category
        </label>
        <select
          className="w-full border border-gray-300 rounded-xl p-2.5 text-base focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition bg-white"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-2 text-sm">
          Price Range <span className="text-purple-600 font-semibold">(₹{priceRange[0]} - ₹{priceRange[1]})</span>
        </label>
        <input
          type="range"
          min="0"
          max="1200"
          step="10"
          value={priceRange[1]}
          onChange={e => setPriceRange([0, Number(e.target.value)])}
          className="w-full h-2 rounded-lg bg-purple-100 accent-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>₹0</span>
          <span>₹1200</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <label className="block font-medium text-gray-700 mb-2 text-sm">
          Minimum Rating
        </label>
        <select
          className="w-full border border-gray-300 rounded-xl p-2.5 text-base focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition bg-white"
          value={minRating}
          onChange={e => setMinRating(Number(e.target.value))}
        >
          {[0, 3, 4, 5].map(r => (
            <option key={r} value={r}>{r === 0 ? 'All' : `${r}+ Stars`}</option>
          ))}
        </select>
      </div>
    </aside>
  );
}

export default SideBar;
