"use client";

import React from 'react';

const GetInvolvedSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(/mount.jpg)` }}
    >
      {/* Overlay Content */}
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Large Heading */}
        <h1 className="text-white md:text-8xl text-4xl font-bold mb-8 lg:mb-0 ">
          GET INVOLVED
        </h1>

        {/* Right Side - Descriptive Text and Button */}
        <div className="text-white lg:w-1/3 w-full md:text-right text-left">
          <h2 className="text-3xl font-bold mb-4">Be a Part of the Global Movement</h2>
          <p className="text-lg mb-8">
            By choosing renewable energy, you can help reduce carbon emissions, lower energy costs, 
            and support innovative solutions that benefit our planet.
          </p>

          {/* Join Now Button */}
          <a
            href="#"
            className="inline-flex items-center bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
          >
            Join Now
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
