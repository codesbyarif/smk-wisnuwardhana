import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1f7a4e] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* Identitas */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">SMK WISNUWARDHANA</h3>
          <p className="opacity-90 leading-relaxed">
            Jl. Danau Sentani No.99
            <br />
            Telp. 713601 Malang
          </p>
          <p className="font-bold">TLP : 0341 713601</p>
        </div>

        {/* Menu 1 */}
        <div className="space-y-4">
          <h4 className="font-bold text-green-200">Jurusan</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="#" className="hover:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Fasilitas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Guru
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Siswa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pendaftaran
              </a>
            </li>
          </ul>
        </div>

        {/* Menu 2 */}
        <div className="space-y-4">
          <h4 className="font-bold text-green-200">Tautan Cepat</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="#" className="hover:text-white">
                Informasi Sekolah
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <h4 className="font-bold text-green-200">Media Sosial</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lime-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-lime-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-lime-300">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
