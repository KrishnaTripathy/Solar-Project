"use client";

import React from 'react';
import Image from 'next/image';

const ProjectHighlight = () => {
  return (
    <section className="px-8 md:py-16 py-2">
      {/* Project Title */}
      <div className="flex justify-between md:flex-row flex-col items-start mb-8">
        <h2 className="text-3xl font-semibold">Solar Village Initiative</h2>
        <div className="flex space-x-4">
          <span className="text-gray-500">Mexico</span>
          <span className="text-gray-500">2024</span>
        </div>
      </div>

      {/* Project Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Image
          src="/solar1.jpg"
          alt="Project 1"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/solar2.jpg"
          alt="Project 2"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/solar3.jpg"
          alt="Project 3"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Project Description */}
      <p className="text-lg text-gray-700 mb-8">
        Our Solar City project aims to create a community powered entirely by solar energy. By installing solar panels on
        residential and commercial buildings, we provide clean, renewable energy to thousands of households.
      </p>

      {/* Learn More Button */}
      <div className="flex justify-end">
        <a href="#" className="flex items-center text-lg font-semibold text-gray-700 hover:text-black">
          LEARN MORE <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
};

export default ProjectHighlight;
