// import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextData } from "../../App";

const Navbar = () => {
  const {cartValue} = useContext(ContextData);
  console.log(cartValue);

  return (
    <div className=" h-[70px] w-full bg-gray-600 flex items-center justify-between px-9">
      <div className="">
        <img
          className="h-[50px] w-[50px] cursor-pointer rounded-full"
          src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Logo"
        />
      </div>
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
      <div className="text-xl text-white bg-red-500 p-3 rounded-full cursor-pointer">
        <FaCartPlus className="" />
        <p className="absolute top-0 bg-gray-500 rounded-full h-[25px] w-[25px] flex items-center justify-center text-sm">
          {cartValue}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
