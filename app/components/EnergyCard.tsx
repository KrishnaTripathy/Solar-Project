"use client";

import React from 'react';


interface EnergyCardProps {
  title: string;
  icon: React.ReactNode;
  details: string;
  isActive: boolean;
  onClick: () => void;
}

const EnergyCard = ({ title, icon, details, isActive, onClick }:EnergyCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 border cursor-pointer rounded-md transition-colors ${
        isActive ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex items-center space-x-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm mt-2">{isActive ? details : '[VIEW DETAILS]'}</p>
    </div>
  );
};

export default EnergyCard;
