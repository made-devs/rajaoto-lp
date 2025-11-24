import Image from "next/image";
import { paketData } from "../data/paket";
import { uspData, contactInfo, branding } from "../data/usp";
import ServiceCategory from "../components/ServiceCategory";
import USPCarousel from "../components/USPCarousel";

export default function Home() {
  // Group packages by category
  const categories = [...new Set(paketData.map((item) => item.category))];
  const groupedPackages = categories.map((cat) => ({
    title: cat,
    items: paketData.filter((item) => item.category === cat),
  }));

  return (
    <main className="min-h-screen bg-[#050505] text-white pb-20 overflow-x-hidden selection:bg-[#FFD700] selection:text-black">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FFD700] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FFD700] rounded-full blur-[150px] opacity-5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10"></div>
        {/* Hero Background Image */}
         <div className="absolute inset-0 z-0">
            {/* Placeholder for hero image, using a dark overlay for now */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-[#050505] to-[#050505]"></div>
         </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 border border-[#FFD700]/30 rounded-full bg-[#FFD700]/5 backdrop-blur-md animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-ping"></span>
            <span className="text-[#FFD700] text-sm font-bold tracking-widest uppercase">{branding.tagline}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up delay-100 tracking-tight">
            RAJA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#E5C100] glow-text">OTO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200 leading-relaxed font-light">
            Solusi Perawatan <span className="text-white font-semibold">Kaki-Kaki & Mesin Mobil</span> Terpercaya dengan Standar Nasional.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <a 
              href={`https://wa.me/${contactInfo.phone.replace(/\D/g,'')}?text=Halo%20Raja%20Oto,%20saya%20ingin%20konsultasi`}
              className="group bg-[#FFD700] text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-[#E5C100] transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] flex items-center gap-3"
            >
              <span>Konsultasi Gratis</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
            <a href="#services" className="text-white/70 hover:text-[#FFD700] font-medium px-8 py-4 transition-colors flex items-center gap-2">
              Lihat Paket <span className="text-xl">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <div className="relative z-20 -mt-20 mb-20">
        <USPCarousel usps={uspData} />
      </div>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-12">
        <div className="container mx-auto px-4 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pilihan <span className="text-[#FFD700]">Paket Service</span></h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Temukan paket perawatan terbaik untuk mobil kesayangan Anda dengan harga transparan dan kualitas terjamin.
          </p>
        </div>

        <div className="space-y-12">
          {groupedPackages.map((group) => (
            <ServiceCategory 
              key={group.title} 
              title={group.title} 
              packages={group.items} 
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-neutral-900/50 backdrop-blur-xl border-t border-neutral-800 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-black text-white mb-8 tracking-tight">RAJA <span className="text-[#FFD700]">OTO</span></h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Bengkel spesialis kaki-kaki dan mesin dengan peralatan canggih dan teknisi bersertifikat. Solusi terbaik untuk kenyamanan berkendara Anda.
              </p>
              <div className="flex gap-4">
                {/* Social Icons */}
                <a href={`https://instagram.com/${contactInfo.instagram}`} className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href={`https://tiktok.com/${contactInfo.tiktok}`} className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-all hover:-translate-y-1">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-white mb-8">Kontak Kami</h4>
              <ul className="space-y-6 text-neutral-400">
                <li className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FFD700] group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span className="mt-2 group-hover:text-white transition-colors">{contactInfo.phone}</span>
                </li>
                <li className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FFD700] group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <span className="mt-2 group-hover:text-white transition-colors">{contactInfo.website}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-8">Jam Operasional</h4>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex justify-between items-center border-b border-neutral-800 pb-4">
                  <span>Senin - Sabtu</span>
                  <span className="text-[#FFD700] font-bold">08:00 - 17:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-neutral-800 pb-4">
                  <span>Minggu</span>
                  <span className="text-[#FFD700] font-bold">09:00 - 15:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Raja Oto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
