import React, { useState } from 'react';

const yogaOrders = [
  {
    orderId: 'YOGA20250701',
    date: '2025-07-01',
    total: '₹2,499',
    status: 'Delivered',
    items: [
      { name: 'Premium Yoga Mat (Eco-Friendly)', quantity: 1 },
      { name: 'Yoga Block Set (2 pcs)', quantity: 1 },
    ],
  },
  {
    orderId: 'YOGA20250620',
    date: '2025-06-20',
    total: '₹899',
    status: 'Delivered',
    items: [{ name: 'Yoga Strap – Cotton, 8ft', quantity: 1 }],
  },
  {
    orderId: 'YOGA20250518',
    date: '2025-05-18',
    total: '₹3,199',
    status: 'Shipped',
    items: [
      { name: 'Meditation Cushion – Organic Cotton', quantity: 1 },
      { name: 'Yoga Wheel', quantity: 1 },
    ],
  },
];


const Order = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col justify-between">
      {/* Order ID and Date */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-purple-700">Order #{order.orderId}</h2>
        <p className="text-sm text-gray-500">Date: {order.date}</p>
      </div>

      {/* Order Status */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Status:{' '}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-purple-700 border border-purple-300">
            {order.status}
          </span>
        </p>
      </div>

      {/* View Details Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm font-medium text-purple-600 border border-purple-600 px-4 py-1 rounded hover:bg-purple-600 hover:text-white transition"
        >
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
      </div>

      {/* Detailed Info */}
      {showDetails && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500 mb-1">Items Ordered:</p>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} × {item.quantity}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 font-medium">
            Total Amount: <span className="text-gray-800">{order.total}</span>
          </p>
        </div>
      )}
    </div>
  );
};

// Order History Page Component
const OrderHistoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          🧘 Order History
        </h1>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {yogaOrders.map((order) => (
            <OrderCard key={order.orderId} order={order} />
          ))}
        </div>

        {/* No Orders */}
        {yogaOrders.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No yoga orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Order;