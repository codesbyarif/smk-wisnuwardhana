import { Facebook, Instagram, Youtube, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1f7a4e] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* KOLOM 1: Info Sekolah */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider mb-4">SMK Wisnuwardhana</h3>
            <div className="flex items-start gap-3 text-green-100 text-sm">
              <MapPin size={20} className="shrink-0 mt-1" />
              <p>
                Jl. Danau Sentani No.99
                <br />
                Malang, Jawa Timur
                <br />
                Kode Pos 65139
              </p>
            </div>
            <div className="flex items-center gap-3 text-green-100 text-sm">
              <Phone size={20} className="shrink-0" />
              <p>Telp. 0341 713601</p>
            </div>
          </div>

          {/* KOLOM 2: Jelajahi */}
          <div>
            <h3 className="font-bold text-lg mb-6">Jelajahi</h3>
            <ul className="space-y-3 text-sm text-green-100">
              <li>
                <Link href="/profil" className="hover:text-white hover:underline transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Tentang Kami
                </Link>
              </li>
              <li>
                {/* Mengubah Fasilitas menjadi Galeri */}
                <Link href="/galeri" className="hover:text-white hover:underline transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Galeri
                </Link>
              </li>
              <li>
                <Link href="/guru" className="hover:text-white hover:underline transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Guru
                </Link>
              </li>
              <li>
                <Link href="/siswa" className="hover:text-white hover:underline transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Siswa
                </Link>
              </li>
              <li>
                <Link href="/daftar" className="hover:text-white hover:underline transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Pendaftaran
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: Tautan Cepat */}
          <div>
            <h3 className="font-bold text-lg mb-6">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm text-green-100">
              <li>
                <Link href="/fitur" className="hover:text-white hover:underline transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Informasi Sekolah
                </Link>
              </li>
              <li>
                <Link href="/fitur" className="hover:text-white hover:underline transition-all flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: Media Sosial */}
          <div>
            <h3 className="font-bold text-lg mb-6">Media Sosial</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/wisnuwardhanamlg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1f7a4e] transition-all duration-300"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Sma-Smk-Wisnuwardhana-Malang-100067865505035/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1f7a4e] transition-all duration-300"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@sma-smkwisnuwardhanamalang7354"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1f7a4e] transition-all duration-300"
                title="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-green-200">
          <p>&copy; {new Date().getFullYear()} SMK Wisnuwardhana Malang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
