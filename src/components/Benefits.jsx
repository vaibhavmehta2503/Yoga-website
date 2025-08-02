import React from "react";

const Benefits = () => {
  return (
    <div className="bg-white p-8 text-center shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Shop With Us?</h2>
      <ul className="space-y-3 text-lg text-gray-600">
        <li>🚚 <span className="font-medium">Free Shipping</span></li>
        <li>📞 <span className="font-medium">24/7 Customer Support</span></li>
        <li>💳 <span className="font-medium">Secure Payment</span></li>
        <li>🔄 <span className="font-medium">Easy Returns</span></li>
      </ul>
    </div>
  );
};

export default Benefits;