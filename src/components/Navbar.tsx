'use client';

import Link from 'next/link';
import { Search, X, Menu } from 'lucide-react'; // 1. Tambah icon Menu (Hamburger)
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const menus = ['Home', 'Profil', 'Guru', 'Siswa', 'Fitur', 'Galeri', 'Berita', 'Artikel', 'Buku Tamu'];

  // State untuk Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 2. State untuk Mobile Menu (Hamburger)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/pencarian?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="bg-[#1f7a4e] text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* BARIS UTAMA (Atas) */}
        <div className="flex justify-between items-center">
          {/* LOGO AREA */}
          <div className="flex items-center gap-3 z-50">
            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded flex items-center justify-center overflow-hidden">
              <Image src="/images/logo.jpg" alt="Logo SMK Wisnuwardhana" fill className="object-contain p-1" sizes="50px" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-sm md:text-base">SMK WISNUWARDHANA</span>
              <span className="text-xs text-green-100">MALANG</span>
            </div>
          </div>

          {/* DESKTOP MENU (Hanya muncul di Layar Besar 'lg') */}
          {/* Disembunyikan jika Search sedang aktif agar tidak tabrakan */}
          {!isSearchOpen && (
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {menus.map((menu) => (
                <Link key={menu} href={menu === 'Home' ? '/' : `/${menu.toLowerCase().replace(' ', '-')}`} className="hover:text-lime-300 transition-colors">
                  {menu}
                </Link>
              ))}
            </div>
          )}

          {/* RIGHT ACTIONS (Search, Buttons, Hamburger) */}
          <div className="flex items-center gap-3">
            {/* SEARCH BAR LOGIC */}
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full px-3 py-1 animate-in fade-in slide-in-from-right-4 duration-300 absolute right-4 left-16 md:static md:w-auto z-50 shadow-lg">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Cari..." className="text-gray-800 text-sm outline-none px-2 w-full md:w-48 bg-transparent" autoFocus />
                <button type="submit" className="text-green-700 hover:text-green-900 p-1">
                  <Search size={18} />
                </button>
                <button type="button" onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-red-500 p-1 ml-1">
                  <X size={18} />
                </button>
              </form>
            ) : (
              <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Search size={20} />
              </button>
            )}

            {/* Tombol Daftar/Masuk (Hidden di Mobile kecil biar rapi, Muncul di MD ke atas) */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/daftar" className="px-5 py-2 border border-white/30 rounded-full text-sm font-medium hover:bg-white/10 transition">
                Daftar
              </Link>
              <Link href="/masuk" className="px-5 py-2 bg-[#15803d] rounded-full text-sm font-medium hover:bg-green-800 transition shadow-lg border border-white/10">
                Masuk
              </Link>
            </div>

            {/* 3. TOMBOL HAMBURGER (Hanya Muncul di Mobile/Tablet 'lg:hidden') */}
            <button className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 4. MOBILE MENU DROPDOWN (Muncul saat isMobileMenuOpen = true) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20 animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="flex flex-col gap-4 text-center">
              {menus.map((menu) => (
                <Link
                  key={menu}
                  href={menu === 'Home' ? '/' : `/${menu.toLowerCase().replace(' ', '-')}`}
                  className="py-2 hover:bg-white/10 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)} // Tutup menu saat link diklik
                >
                  {menu}
                </Link>
              ))}

              {/* Tombol Daftar/Masuk Versi Mobile (Muncul di dalam menu) */}
              <div className="flex flex-col gap-3 mt-2 md:hidden">
                <Link href="/daftar" className="py-2 border border-white/30 rounded-full text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Daftar
                </Link>
                <Link href="/masuk" className="py-2 bg-[#15803d] border border-white/10 rounded-full text-sm font-medium shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Masuk
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
