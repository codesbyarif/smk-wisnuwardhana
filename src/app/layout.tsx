// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Font umum yang bersih
import './globals.css';
import Navbar from '@/components/Navbar';
import TopBar from '@/components/TopBar'; // Buat komponen ini
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Ambil ketebalan yang sering dipakai
  variable: '--font-poppins', // Nama variabel untuk CSS
});
export const metadata: Metadata = {
  title: 'SMK Wisnuwardhana Malang',
  description: 'Wujudkan Masa Depan Gemilang',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        {/* Header Group */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
          <TopBar />
          <Navbar />
        </header>

        {/* Padding top agar konten tidak tertutup navbar yang fixed */}
        <main className="pt-32 min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
