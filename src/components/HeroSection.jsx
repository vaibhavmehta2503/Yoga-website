import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/classes"); // Adjust to your actual route
  };

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-yellow-50 py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-800 leading-tight mb-4">
            Embrace Peace Through Yoga
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Join our community and begin your journey to a healthier, balanced life with guided yoga sessions and wellness programs.
          </p>
          <button
            onClick={handleExplore}
            className="bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
          >
            Explore Classes
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src="/images/hero.png" 
            alt="Yoga Hero"
            className="w-full max-w-md mx-auto lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;