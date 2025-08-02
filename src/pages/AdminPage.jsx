import React, { useState } from 'react';
import logo from "/images/yoga.jpg"; 

const AdminPage = () => {
  const [className, setClassName] = useState('');
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    rating: '',
    badge: '',
  });
  const handleAddClass = () => {
    console.log('Class Added:', className);
    setClassName('');
  };

  const handleAddCategory = () => {
    console.log('Category Added:', category);
    setCategory('');
  };
  const handleAddProduct = () => {
    console.log('Product Added:', product);
    setProduct({
      name: '',
      price: '',
      category: '',
      image: '',
      rating: '',
      badge: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      {/* Logo and Title */}
      <div className="flex items-center gap-4 mb-10 justify-center">
        <img src={logo} alt="YogaLife Logo" className="h-12 w-12 rounded-full shadow-md" />
        <h1 className="text-4xl font-bold text-indigo-800">Admin Dashboard</h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Class Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition text-black">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Add New Class</h2>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-300 p-2 rounded mb-4 focus:ring-indigo-300 focus:outline-none"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Class Day,Time"
            className="w-full border border-gray-300 p-2 rounded mb-4 focus:ring-indigo-300 focus:outline-none"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Level"
            className="w-full border border-gray-300 p-2 rounded mb-4 focus:ring-indigo-300 focus:outline-none"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="w-full border border-gray-300 p-2 rounded mb-4 focus:ring-indigo-300 focus:outline-none"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <button
            onClick={handleAddClass}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded"
          >
            Add Class
          </button>
        </div>

        {/* Category Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition  text-black">
          <h2 className="text-xl font-semibold text-green-600 mb-4">Add New Category</h2>
          <input
            type="text"
            placeholder="Enter category"
            className="w-full border border-gray-300 p-2 rounded mb-4 focus:ring-green-300 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button
            onClick={handleAddCategory}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
          >
            Add Category
          </button>
        </div>

        {/* Product Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition  text-black">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Add New Product</h2>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Product name"
              className="border p-2 rounded"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="border p-2 rounded"
              value={product.category}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="border p-2 rounded"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="border p-2 rounded"
              value={product.image}
              onChange={(e) => setProduct({ ...product, image: e.target.value })}
            />
            <input
              type="number"
              placeholder="Rating (1–5)"
              className="border p-2 rounded"
              value={product.rating}
              onChange={(e) => setProduct({ ...product, rating: e.target.value })}
            />
            <input
              type="text"
              placeholder="Badge (optional)"
              className="border p-2 rounded"
              value={product.badge}
              onChange={(e) => setProduct({ ...product, badge: e.target.value })}
            />
          </div>
          <button
            onClick={handleAddProduct}
            className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
