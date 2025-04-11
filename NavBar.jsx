// src/components/NavBar.jsx
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-3 px-6 flex justify-around sticky top-0 z-50">
      <a href="#home" className="text-gray-800 font-semibold hover:text-orange-600 transition">Home</a>
      <a href="#menu" className="text-gray-800 font-semibold hover:text-orange-600 transition">Menu</a>
      <a href="#features" className="text-gray-800 font-semibold hover:text-orange-600 transition">Features</a>
      <a href="#offers" className="text-gray-800 font-semibold hover:text-orange-600 transition">Offers</a>
      <a href="#reviews" className="text-gray-800 font-semibold hover:text-orange-600 transition">Reviews</a>
      <a href="#booking" className="text-gray-800 font-semibold hover:text-orange-600 transition">Book a Table</a>
      <a href="#contact" className="text-gray-800 font-semibold hover:text-orange-600 transition">Contact</a>
    </nav>
  );
};

export default NavBar;
