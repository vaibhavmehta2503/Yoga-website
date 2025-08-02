import React from 'react';

const NavLinks = () => {
  return (
    <nav className="flex gap-6 text-sm text-gray-700 justify-center ">
      <a href="/" className='hover:text-yellow-600'>Home</a>
      <a href="/Product" className='hover:text-yellow-600'>Products</a>
      <a href="/#blog" className='hover:text-yellow-600'>Blog</a>
      <a href="/#offers" className='hover:text-yellow-600'>Offers</a>
      <a href="/Classes" className='hover:text-yellow-600'>Class</a>
    </nav>
  );
};

export default NavLinks;
