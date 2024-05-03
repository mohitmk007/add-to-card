// import React from 'react'

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[70px] w-full bg-gray-600 flex items-center justify-center">
      <ul className="flex items-center justify-center gap-6 text-xl text-gray-200 ">
        <li className="hover:text-white hover:border-b-2">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-white hover:border-b-2">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="hover:text-white hover:border-b-2">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-white hover:border-b-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
