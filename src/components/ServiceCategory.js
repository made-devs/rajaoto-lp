'use client';
'use client';

import React, { useRef } from 'react';
import ServiceCard from './ServiceCard';

const ServiceCategory = ({ title, packages }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // Card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="py-12 border-b border-neutral-800/50 last:border-0 relative z-10">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 capitalize inline-block relative">
          <span className="relative z-10">{title} Packages</span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFD700]/20 z-0 skew-x-12"></span>
        </h2>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Pilihan terbaik untuk kebutuhan {title} mobil Anda
        </p>
      </div>

      {/* Carousel Container (Mobile) / Flex Grid (Desktop) */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory hide-scrollbar md:flex-wrap md:justify-center md:overflow-visible md:snap-none md:pb-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {packages.map((pkg) => (
          <ServiceCard key={pkg.id} item={pkg} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
