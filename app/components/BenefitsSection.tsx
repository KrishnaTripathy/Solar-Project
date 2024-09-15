"use client";

import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/water.jpg)' }} // No need to import from the public folder
      >
        {/* Overlay Card */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80">
            <Image
              src="/water2.jpg" // Direct path from public folder
              alt="Environmental Benefits"
              className="rounded-lg mb-4"
              width={320} // Set image dimensions explicitly
              height={160}
              style={{ objectFit: 'cover' }} // Use style for object-fit
              quality={100}
              priority
            />
            <h2 className="text-lg font-bold">Environmental Benefits</h2>
            <p className="text-sm text-gray-600 mt-2">
              Switching to renewable energy reduces carbon emissions and pollutants, mitigating climate change and improving air quality.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8">
        <button className="flex items-center text-sm text-gray-200 hover:text-black">
          <span className="mr-2">←</span> Previous
        </button>
        <button className="flex items-center text-sm text-gray-200 hover:text-black">
          Next <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default BenefitsSection;
