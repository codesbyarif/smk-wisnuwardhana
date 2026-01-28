import { Play } from 'lucide-react';
import Image from 'next/image'; // 1. Jangan lupa import ini
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Left Content (Tetap sama) */}
      <div className="flex-1 space-y-6">
        <span className="text-sm font-bold tracking-wide text-gray-500">#UnggulDanMandiri</span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f7a4e] leading-tight">
          Wujudkan Masa Depan <br />
          Gemilang dengan Keahlian <br />
          Nyata
        </h1>
        <p className="text-gray-600 max-w-md">Pertajam kompetensi kejuruanmu bersama pengajar ahli dan raih sertifikasi industri resmi untuk siap kerja.</p>
        <div className="flex gap-4 pt-2">
          {/* Tombol Daftar -> Ke halaman /daftar */}
          <Link href="/daftar" className="bg-[#1f7a4e] text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition inline-block text-center">
            Daftar
          </Link>

          {/* Tombol Jurusan -> Scroll ke id="jurusan" */}
          <Link href="#jurusan" className="border-2 border-[#1f7a4e] text-[#1f7a4e] px-8 py-3 rounded-full font-bold hover:bg-green-50 transition inline-block text-center">
            Jurusan
          </Link>
        </div>
      </div>

      {/* Right Content (Video Placeholder dengan Thumbnail) */}
      <div className="flex-1 w-full">
        {/* Link ke Youtube Asli (Opsional: agar bisa diklik) */}
        <a
          href="https://www.youtube.com/watch?v=tgC6FWf0EuY"
          target="_blank"
          rel="noopener noreferrer"
          // Pastikan ada class "relative" di bawah ini!
          className="block aspect-video bg-gray-200 rounded-2xl relative group cursor-pointer overflow-hidden shadow-xl border-4 border-white"
        >
          {/* 2. Gambar Thumbnail */}
          <Image
            // Ganti URL YouTube dengan path gambar lokal Anda
            // Pastikan diawali dengan tanda "/"
            src="/images/hero-banner.jpg"
            alt="Foto Gedung SMK Wisnuwardhana" // Jangan lupa update alt text-nya
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            // Opsional: Tambahkan priority jika gambar ini muncul di layar pertama kali dibuka (above the fold)
            priority
          />

          {/* Overlay Hitam Transparan (Supaya tombol play kontras) */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

          {/* Play Button (Posisi Absolute di Tengah) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-[#1f7a4e] group-hover:scale-110 transition-transform shadow-lg z-10">
              <Play fill="#1f7a4e" className="ml-1 w-6 h-6" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
