import React, { useState, useContext } from 'react'; 
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/product';
import { categories } from '../data/categories';
import { AppContext } from '../App'; 

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1200]);
  const [minRating, setMinRating] = useState(0);
  const [showFilter, setShowFilter] = useState(false);

  const { searchQuery } = useContext(AppContext); 
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchRating = product.rating >= minRating;
    const matchSearch =
      searchQuery.trim() === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchPrice && matchRating && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#e0e7ff] to-[#ede9fe] text-gray-800">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-300">
        
        {/* Sidebar */}
        {showFilter && (
          <aside className="col-span-1 bg-white shadow-xl rounded-2xl p-4 h-fit">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Filters</h3>
              <button
                onClick={() => setShowFilter(false)}
                className="text-sm text-purple-600 hover:underline"
              >
                Hide
              </button>
            </div>
            <SideBar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minRating={minRating}
              setMinRating={setMinRating}
            />
          </aside>
        )}

        {/* Product Grid */}
        <section className={showFilter ? 'col-span-3' : 'col-span-4'}>
          {!showFilter && (
            <div className="mb-4">
              <button
                onClick={() => setShowFilter(true)}
                className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700 transition"
              >
                Filters
              </button>
            </div>
          )}

          <h2 className="text-2xl font-bold mb-6">Our Yoga Products</h2>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8">
              No products match the selected filters or search.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
