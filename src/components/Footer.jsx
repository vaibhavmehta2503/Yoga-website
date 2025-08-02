import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="text-center">
        <p className="mb-2">&copy; 2025 Yoga Life. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#facebook" className="hover:underline">Facebook</a>
          <a href="#instagram" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;