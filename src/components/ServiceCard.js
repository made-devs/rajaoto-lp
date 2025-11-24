import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ item }) => {
  const whatsappMessage = `Halo Raja Oto, saya tertarik dengan ${item.name}`;
  const whatsappUrl = `https://wa.me/6285119881371?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full snap-center group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,215,0,0.1)] min-w-[300px] max-w-[300px] md:min-w-[340px] md:max-w-[340px] w-full relative">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={`/images/${item.image}`}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div>
        <div className="absolute top-3 right-3 bg-[#FFD700] text-black font-extrabold px-3 py-1 rounded-lg text-sm shadow-lg">
          {item.discount}% OFF
        </div>
        <div className="absolute bottom-3 left-3">
           <span className="text-[10px] font-bold text-black bg-[#FFD700] px-2 py-1 rounded uppercase tracking-wider">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-white text-xl font-bold leading-tight mb-4 group-hover:text-[#FFD700] transition-colors min-h-[3.5rem]">
          {item.name}
        </h3>

        {/* Features Preview */}
        <div className="mb-6 flex-grow">
          <ul className="space-y-2">
            {item.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 group-hover:text-white transition-colors">
                <span className="text-[#FFD700] mt-0.5 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span className="line-clamp-2 leading-snug">{feature.title}</span>
              </li>
            ))}
          </ul>
          {item.features.length > 3 && (
             <p className="text-xs text-neutral-500 mt-3 pl-7 italic group-hover:text-[#FFD700] transition-colors">
               + {item.features.length - 3} fitur premium lainnya
             </p>
          )}
        </div>

        {/* Price & Action */}
        <div className="mt-auto pt-5 border-t border-neutral-800/50 group-hover:border-[#FFD700]/30 transition-colors">
          <div className="flex flex-col mb-4">
            <span className="text-neutral-500 text-sm line-through mb-1">
              Rp {item.normalPrice.toLocaleString('id-ID')}K
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[#FFD700] text-3xl font-black tracking-tight">
                Rp {item.discountPrice.toLocaleString('id-ID')}K
              </span>
            </div>
          </div>

          {/* Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-black hover:bg-[#FFD700] font-bold text-center py-3.5 rounded-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
          >
            <span>Booking Sekarang</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
