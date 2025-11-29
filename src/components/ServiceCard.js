'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ServiceCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  // --- GSAP Animations ---
  useGSAP(
    () => {
      // 1. Entry Animation (Card muncul dari bawah)
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%', // Mulai animasi saat card masuk 90% viewport
          },
        }
      );
    },
    { scope: cardRef }
  );

  // Animasi Button saat ditekan (Micro-interaction)
  const handleButtonPress = () => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  };

  // --- Logic Data ---
  const CONTACT_PHONE = '6285119881371';
  const whatsappMessage = `Halo Raja Oto, saya tertarik dengan promo: ${
    item.name
  } seharga Rp ${item.discountPrice.toLocaleString('id-ID')}K`;
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const savings = item.normalPrice - item.discountPrice;
  const discountPercentage = Math.round((savings / item.normalPrice) * 100);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* --- CARD CONTAINER (Mobile Full Width) --- */}
      <div
        ref={cardRef}
        className="w-full bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl mb-6 last:mb-0"
      >
        {/* --- IMAGE AREA --- */}
        <div
          className="relative w-full aspect-square overflow-hidden cursor-pointer"
          onClick={toggleModal}
        >
          <Image
            src={`/images/${item.image}`}
            alt={item.name}
            fill
            className="object-cover"
            sizes="100vw" // Mobile optimized size
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0F0F0F] via-transparent to-transparent opacity-90"></div>

          {/* Badge Category */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
              {item.category}
            </span>
          </div>

          {/* Badge Discount */}
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-[#FFD700] text-black text-xs font-black px-2 py-1 rounded shadow-[0_0_10px_rgba(255,215,0,0.4)]">
              -{discountPercentage}%
            </div>
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="p-5 relative -mt-6 z-20 bg-[#0F0F0F] rounded-t-2xl border-t border-white/5">
          {/* Title */}
          <h3 className="text-white text-lg font-bold leading-snug mb-3">
            {item.name}
          </h3>

          {/* Garansi Info */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-4 h-4 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFD700"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="text-xs text-neutral-400">
              Garansi Resmi <span className="text-[#FFD700]">3 Bulan</span>
            </span>
          </div>

          {/* Price Section */}
          <div className="flex items-end justify-between mb-5 p-4 bg-white/5 rounded-xl border border-white/5">
            <div>
              <p className="text-neutral-500 text-xs line-through mb-1">
                Rp {item.normalPrice.toLocaleString('id-ID')}K
              </p>
              <p className="text-[#FFD700] text-2xl font-black tracking-tight">
                Rp {item.discountPrice.toLocaleString('id-ID')}K
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-1 rounded font-bold">
                Hemat {savings.toLocaleString('id-ID')}K
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            ref={buttonRef}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleButtonPress}
            className="w-full bg-[#FFD700] text-black font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_-5px_rgba(255,215,0,0.3)]"
          >
            <span>Booking Sekarang</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* --- MODAL (GSAP Animated) --- */}
      {isModalOpen && (
        <ModalOverlay
          item={item}
          onClose={toggleModal}
          discountPrice={item.discountPrice}
        />
      )}
    </>
  );
};

// Komponen Modal dipisah agar animasi entry lebih mudah dikontrol saat mount
const ModalOverlay = ({ item, onClose, discountPrice }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      // Animate Overlay Fade In
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      // Animate Content Pop Up
      gsap.fromTo(
        contentRef.current,
        { scale: 0.8, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
      );
    },
    { scope: overlayRef }
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9999 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-[360px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-square w-full">
          <Image
            src={`/images/${item.image}`}
            alt={item.name}
            fill
            className="object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full backdrop-blur-md hover:bg-[#FFD700] hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
          <p className="text-[#FFD700] text-2xl font-black">
            Rp {discountPrice.toLocaleString('id-ID')}K
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
