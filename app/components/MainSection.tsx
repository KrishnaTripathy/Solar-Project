"use client";

import React, { useState } from 'react';
import EnergyCard from '@/app/components/EnergyCard';
import windTurbineImage from '@/public/wind.jpg';
import Image from 'next/image';

const energyTypes = [
    { title: 'Solar Energy', icon: '☀️', details: 'Solar panels convert sunlight into electricity.' },
    { title: 'Hydro Energy', icon: '💧', details: 'Water flow is used to generate electricity.' },
    { title: 'Geothermal Energy', icon: '🌋', details: 'Geothermal energy harnesses heat from the earth.' },
    { title: 'Wind Energy', icon: '🌬️', details: 'Wind turbines convert the kinetic energy of wind into electrical power.' }
];

const MainSection = () => {
    const [activeEnergy, setActiveEnergy] = useState('Wind Energy');

    return (
        <section className="px-8 py-16">
            {/* Heading */}
            <div className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-black">
                    Promoting new energy <br />technologies and solutions.
                </h1>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Image Section */}
                <div className="lg:w-2/3 w-full mb-8 lg:mb-0 pr-0 lg:pr-8">
                    <Image
                        src={windTurbineImage}
                        className="rounded-lg w-full h-auto shadow-lg"
                        alt="Wind Turbine"
                        style={{ objectFit: 'cover' }} // Replaces objectFit prop
                        quality={100}
                        priority
                    />
                </div>

                {/* Energy Types Grid */}
                <div className="lg:w-1/3 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {energyTypes.map((energy) => (
                        <EnergyCard
                            key={energy.title}
                            title={energy.title}
                            icon={energy.icon}
                            details={energy.details}
                            isActive={activeEnergy === energy.title}
                            onClick={() => setActiveEnergy(energy.title)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainSection;
