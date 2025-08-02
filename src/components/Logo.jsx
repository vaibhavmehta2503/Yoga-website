import React from 'react';
import logo from '/images/yoga.jpg'; 

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="YogaLife Logo" className="h-10 w-auto" />
      <span className="text-xl font-bold text-purple-600">YogaLife</span>
    </div>
  );
};

export default Logo;
