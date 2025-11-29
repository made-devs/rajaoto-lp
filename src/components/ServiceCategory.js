'use client';

import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceCategory = ({ title, packages }) => {
  return (
    <div className="py-8 border-b border-white/5 last:border-0 relative z-10">
      <div className="container mx-auto px-4 mb-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2 capitalize inline-block relative">
          <span className="relative z-10">{title} Packages</span>
          <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFD700]/20 z-0 skew-x-12"></span>
        </h2>
      </div>

      {/* FIX: Hapus 'flex justify-center' dan 'w-fit'. Gunakan 'w-full' */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 w-full">
          {packages.map((pkg) => (
            <ServiceCard key={pkg.id} item={pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;
