// import React from 'react'

const Navbar = () => {
  return (
    <div className="h-[70px] w-full bg-gray-600 flex items-center justify-center">
      <ul className="flex items-center justify-center gap-6 text-xl text-gray-200 ">
        <li className="hover:text-white hover:border-b-2">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-white hover:border-b-2">
          <a href="/cart">Cart</a>
        </li>
        <li className="hover:text-white hover:border-b-2">
          <a href="/about">About</a>
        </li>
        <li className="hover:text-white hover:border-b-2">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
