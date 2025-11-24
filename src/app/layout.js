import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Raja Oto - Your Trusted Automotive Workshop',
  description: 'Experience top-notch automotive services with Raja Oto.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-yellow-500`}>
        {children}
      </body>
    </html>
  );
}
