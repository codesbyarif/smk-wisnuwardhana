import { Info, Link as LinkIcon, Phone } from 'lucide-react';
import Link from 'next/link';

export default function FiturPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8 max-w-5xl">
      {/* SECTION 1: INFORMASI SEKOLAH */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 uppercase flex justify-center items-center gap-2">
          <Info className="w-8 h-8" /> Informasi Sekolah
        </h2>

        <div className="bg-white/20 p-6 rounded-xl border border-white/10">
          <ul className="space-y-3 font-medium text-gray-900">
            {[
              'Spanduk Informasi SPMB 2026',
              'Banner Informasi SPMB 2026',
              'Brosur SPMB Halaman 2 2026',
              'Brosur SPMB Halaman 1 2026',
              'DAFTAR SISWA SMK DITERIMA DI PERGURUAN TINGGI',
              'PRESTASI SISWA SMK WISNUWARDHANA MALANG',
              'INFORMASI KEGIATAN EKSTRAKURIKULER 2026',
              'INFORMASI UKK 2026',
              'INFORMASI PKL 2026',
              'PENGUMUMAN KELULUSAN SISWA 2024/2025',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 w-2 h-2 bg-green-900 rounded-full flex-shrink-0"></span>
                <Link href="#" className="hover:underline hover:text-green-900 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 2: LINK WEB */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 uppercase flex justify-center items-center gap-2">
          <LinkIcon className="w-8 h-8" /> Link Web
        </h2>

        <div className="space-y-4 font-medium text-gray-900">
          {/* Item Link 1 */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span>Website resmi Dinas Pendidikan Nasional:</span>
            <a href="https://www.bandung.go.id" target="_blank" className="text-blue-900 underline hover:text-blue-950 break-all">
              www.bandung.go.id
            </a>
          </div>

          {/* Item Link 2 */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span>Website resmi Kota Bandung:</span>
            <a href="https://www.jabar.go.id" target="_blank" className="text-blue-900 underline hover:text-blue-950 break-all">
              www.jabar.go.id
            </a>
          </div>

          {/* Item Link 3 */}
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span>Website resmi Propinsi Jawa Barat:</span>
            <a href="https://www.dikmenum.go.id" target="_blank" className="text-blue-900 underline hover:text-blue-950 break-all">
              www.dikmenum.go.id
            </a>
          </div>

          {/* Item Link 4 */}
          <div className="mt-4 pt-4 border-t border-black/10">
            <p className="mb-1">Website resmi DikmenumBergabung lah bersama kami,</p>
            <p>
              Kirim alamat website anda ke email : <span className="font-bold">smkwisnuwardhana@gmail.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: KONTAK SEKOLAH */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 uppercase flex justify-center items-center gap-2">
          <Phone className="w-8 h-8" /> Kontak Sekolah
        </h2>

        <div className="text-center md:text-left md:flex md:justify-center">
          <div className="space-y-2 text-gray-900 font-medium bg-white/20 p-6 rounded-xl inline-block w-full md:w-auto min-w-[50%]">
            <h3 className="font-bold text-xl mb-4">SMK WISNUWARDHANA MALANG</h3>
            <p>
              <span className="font-bold">Alamat:</span> Jl.Danau Sentani No.99 Telp. 713601 Malang
            </p>
            <p>
              <span className="font-bold">Email:</span> info@smkwisnuwardhanamalang.sch.id
            </p>
            <p>
              <span className="font-bold">Web:</span> www.smkwisnuwardhanamalang.sch.id
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
