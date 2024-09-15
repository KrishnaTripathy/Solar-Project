"use client";

import React from 'react';
import Image from 'next/image';
import heroImage from '@/public/river.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-screen -z-10 bg-cover bg-center">
      {/* Optimized Next.js Image */}
      <Image 
        src={heroImage} 
        alt="River" 
        fill
        style={{ objectFit: 'cover' }}
        quality={100} 
        priority 
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <h1 className="md:text-[8vw] sm:text-[8vw] text-2xl text-white font-bold">FUTURE — SOLUTION</h1>
        <p className="text-white md:text-center text-center text-lg md:mt-10 mt-4">
          Be part of the global shift towards clean, sustainable energy sources.
        </p>
        <a
          href="#"
          className="mt-8 text-white text-sm hover:underline flex items-center"
        >
          Explore More <span className="ml-2">⬇️</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
