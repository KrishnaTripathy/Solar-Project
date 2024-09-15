"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-8">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left mb-8">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <p className="text-gray-500">©2024 CelestialUI. ALL RIGHTS RESERVED</p>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center lg:items-center mb-8 lg:mb-0">
            <div className="text-6xl font-bold">©2024 — CelestialUI</div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center lg:items-end">
            <a href="#" className="text-gray-500 hover:text-black">PRIVACY POLICY</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left">
          {/* Links Section */}
          <div className="mb-8 lg:mb-0">
            <ul className="flex md:space-x-6 space-x-0 text-lg md:flex-row sm:flex-row flex-col md:justify-center sm:justify-around justify-center">
              <li><a href="#" className="hover:text-gray-600">HOME</a></li>
              <li><a href="#" className="hover:text-gray-600">GREEN ENERGY</a></li>
              <li><a href="#" className="hover:text-gray-600">CASE STUDY</a></li>
              <li><a href="#" className="hover:text-gray-600">RESOURCES</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8 lg:mb-0 ">
            <h3 className="font-bold text-lg ">CONTACTS</h3>
            <div className='flex md:flex-col sm:flex-row flex-col  justify-between'>
            <p className="text-gray-500">+1234 567 890</p>
            <p className="text-gray-500">info@CelestialUI.org</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold text-lg ">FOLLOW US</h3>
            <ul className='flex md:flex-col sm:flex-row flex-col justify-between'>
              <li><a href="#" className="hover:text-gray-600">INSTAGRAM</a></li>
              <li><a href="#" className="hover:text-gray-600">LINKEDIN</a></li>
              <li><a href="#" className="hover:text-gray-600">FACEBOOK</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg">ADDRESS</h3>
            <div className='flex md:flex-row sm:flex-row flex-col justify-center space-x-2'>

            <p className="text-gray-500">37 LANE</p>
            <p className="text-gray-500">Kolkata</p>
            <p className="text-gray-500">India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
