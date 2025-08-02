import React from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
import logo from '/images/yoga.jpg'; 

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0ebfc] to-[#e3defb] flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Signup Form */}
        <div className="w-full md:w-1/2">
          <img src={logo} alt="YogaZone Logo" className="h-10 mb-6" />

          <h2 className="text-3xl font-extrabold text-[#2d1e61] mb-2">Create Account</h2>
          <p className="text-gray-500 text-sm mb-6">Begin your yoga journey with us.</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-xl py-2.5 px-4 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-2.5 rounded-xl shadow hover:scale-105 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/Login" className="text-purple-600 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>

        {/* Right: Meditation Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/yogalog.png" 
            alt="Meditation Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
