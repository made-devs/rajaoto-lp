import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Raja Oto - Bengkel Spesialis Kaki-Kaki & Rack Steer',
  description:
    'Spesialis perbaikan kaki-kaki mobil, rack steer, dan shockbreaker bergaransi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} w-full min-h-screen mx-auto shadow-2xl antialiased selection:bg-red-600 selection:text-white relative`}
      >
        <main
          className="w-full max-w-[480px] min-h-screen mx-auto relative overflow-hidden bg-transparent"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9)), url('/bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
