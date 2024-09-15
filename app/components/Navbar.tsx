"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Updated import paths

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Green Energy", link: "/green-energy" },
    { name: "Case Study", link: "/case-study" },
    { name: "Resources", link: "/resources" },
    { name: "Energy", link: "/energy" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-transparent absolute top-0 left-0 w-full z-10">
      <div className="text-white font-bold text-lg">CelestialUI</div>
      <div className="hidden md:flex space-x-8 text-white">
        {navLinks.map((link, index) => (
          <a key={index} href={link.link} className="hover:text-gray-300">
            {link.name}
          </a>
        ))}
      </div>
      <button className="hidden md:block bg-white text-black px-4 py-2 rounded-full">
        Become a Partner
      </button>
      <div className="md:hidden absolute right-10 z-10">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white">
          {navLinks.map((link, index) => (
            <a key={index} href={link.link} className="text-2xl hover:text-gray-300" onClick={toggleMobileMenu}>
              {link.name}
            </a>
          ))}
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Become a Partner
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
