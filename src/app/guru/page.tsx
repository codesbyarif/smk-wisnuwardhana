'use client'; // 1. Wajib untuk fitur interaktif

import { Users, FileText, Search, Download } from 'lucide-react';
import { useState } from 'react'; // 2. Import useState

const teachers = [
  { no: 1, nip: '3573016612760005', nama: 'Nining Soehariyan, S.Pd', mapel: 'Fisika, Kimia', jabatan: '-' },
  { no: 2, nip: '35730347087100060', nama: 'Siti Sofianingsih, S.Pd', mapel: 'Biologi', jabatan: '-' },
  { no: 3, nip: '3507180509820002', nama: 'Eko Arif Kurniawan, S.Pd', mapel: 'Bahasa Inggris', jabatan: '-' },
  { no: 4, nip: '3573054501690003', nama: 'Siti Muawanah, S.Pd', mapel: 'Adm. Umum, Kearsipan, Korespondensi', jabatan: '-' },
  { no: 5, nip: '1234', nama: 'Anik Setyowati, S.Pd', mapel: 'Bahasa Indonesia', jabatan: 'Ka. TU' },
  { no: 6, nip: '3460733635200002', nama: 'Dr. Drs. H. Moh. Saifullah, M.Pd', mapel: 'PPKN', jabatan: 'Kepala Sekolah' },
  { no: 7, nip: '50', nama: 'Kariani, S.Pd', mapel: 'Matematika', jabatan: 'Waka Kesiswaan' },
  { no: 8, nip: '52', nama: 'Murtini Retnowati S.E., M.Pd', mapel: 'Produktif Bisnis Digital', jabatan: '-' },
  { no: 9, nip: '53', nama: 'Muhammad Nur Kholis S.HI', mapel: 'Pendidikan Agama Islam', jabatan: '-' },
  { no: 10, nip: '55', nama: 'Nafisah Septin Amalia S.Pd', mapel: 'Produktif Teknik Sepeda Motor', jabatan: '-' },
  { no: 11, nip: '56', nama: 'Mochammad Komaruddin Zuhdi', mapel: 'Informatika', jabatan: '-' },
  { no: 12, nip: '570', nama: 'Iklia Amiroh S.Pd M.M', mapel: 'Produktif Bisnis Digital', jabatan: 'Kaprodi Bisnis Digital' },
  { no: 13, nip: '58', nama: 'Nur Anisa, S.Pd., M.M.', mapel: 'Produktif Administrasi Perkantoran', jabatan: 'Waka Kurikulum' },
  { no: 14, nip: '59', nama: 'Rocky Azhar Basrowi, S.IP.', mapel: 'Pendidikan Pancasila, Sejarah', jabatan: '-' },
  { no: 15, nip: '61', nama: 'Aprizal Tirtarona', mapel: 'Produktif Teknik Sepeda Motor', jabatan: '-' },
  { no: 16, nip: '122', nama: 'Dian Mayasari, S.Pd', mapel: 'Bahasa Indonesia', jabatan: '-' },
  { no: 17, nip: '510', nama: 'Dra. Farida', mapel: 'Produktif Administrasi Perkantoran', jabatan: '-' },
  { no: 18, nip: '620', nama: 'Arif Wijaya', mapel: 'Bahasa Inggris', jabatan: '-' },
  { no: 19, nip: '0', nama: 'Slamet Mulyono', mapel: 'Teknik Sepeda Motor', jabatan: 'Kepala Bengkel' },
  { no: 20, nip: '0', nama: 'M. Alfan Husein, S.Pd, Gr', mapel: 'Matematika', jabatan: '-' },
  { no: 21, nip: '0', nama: 'Alifto Dwi Prastanto, S.Pd, Gr', mapel: 'Kewirausahaan', jabatan: '-' },
  { no: 22, nip: '0', nama: 'Wirayudha Pratama, S.Pd', mapel: 'Guru Olahraga', jabatan: '-' },
];

const materials = [
  {
    title: 'Kenali Tuturanmu',
    desc: 'Materi tentang: Lafal Baku; Tekanan, Intonasi, dan Jeda; Jeda Mengubah Makna',
    size: '574,51 Kbytes',
    hits: 561,
  },
  {
    title: 'Membaca Cepat Untuk Pemulaan',
    desc: 'Materi tentang: Teknik Pemindaian (Scanning); Teknik Pelayapan (Skimming); Manfaat Membaca Cepat',
    size: '361,66 Kbytes',
    hits: 544,
  },
];

export default function GuruPage() {
  // 3. State untuk menyimpan kata kunci pencarian
  const [searchTerm, setSearchTerm] = useState('');

  // 4. Logika Filter: Mencari berdasarkan Nama (Case Insensitive)
  const filteredTeachers = teachers.filter((guru) => guru.nama.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-12 space-y-12 max-w-6xl">
      {/* SECTION 1: DIREKTORI GURU */}
      <section className="bg-[#84cc16] rounded-[2rem] p-6 md:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-8 h-8" /> Direktori Guru
          </h1>

          {/* Search Bar Berfungsi */}
          <div className="relative">
            <input
              type="text"
              placeholder="Cari nama guru..."
              value={searchTerm} // Bind value
              onChange={(e) => setSearchTerm(e.target.value)} // Handle perubahan ketikan
              className="pl-10 pr-4 py-2 rounded-full border-none focus:ring-2 focus:ring-green-800 text-sm w-64 outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* Tabel Responsif */}
        <div className="bg-white/90 rounded-xl overflow-hidden shadow-inner overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-800">
            <thead className="bg-green-800 text-white uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-4 py-3 text-center w-12">No</th>
                <th className="px-4 py-3">NIP</th>
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Pelajaran</th>
                <th className="px-4 py-3">Jabatan</th>
                <th className="px-4 py-3 text-center">Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTeachers.length > 0 ? (
                // 5. Render Data Hasil Filter
                filteredTeachers.map((guru, index) => (
                  <tr key={index} className="hover:bg-green-50 transition-colors even:bg-gray-50">
                    <td className="px-4 py-3 text-center font-medium">{guru.no}</td>
                    <td className="px-4 py-3 font-mono text-xs">{guru.nip}</td>
                    <td className="px-4 py-3 font-semibold">{guru.nama}</td>
                    <td className="px-4 py-3">{guru.mapel}</td>
                    <td className="px-4 py-3 text-gray-600">{guru.jabatan}</td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-green-700 hover:text-green-900 bg-green-100 p-1.5 rounded-md transition-colors" title="Lihat Detail">
                        <FileText size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                // Tampilan jika tidak ada hasil
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500 font-medium">
                    Tidak ditemukan guru dengan nama "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Dummy */}
        <div className="mt-4 flex justify-end gap-2 text-xs font-bold text-green-900">
          <span>Halaman 1 dari 1</span>
        </div>
      </section>

      {/* SECTION 2: MATERI AJAR (Tidak Berubah) */}
      <section className="bg-[#84cc16] rounded-[2rem] p-6 md:p-10 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex justify-center items-center gap-2">
          <FileText className="w-8 h-8" /> Materi Ajar
        </h2>

        <div className="space-y-4">
          {materials.map((item, idx) => (
            <div key={idx} className="bg-white/90 p-4 rounded-xl flex flex-col md:flex-row gap-4 items-start md:items-center hover:shadow-md transition-shadow">
              <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                <FileText size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-green-800 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                <div className="flex gap-4 mt-2 text-xs text-gray-500 italic">
                  <span>File ini berukuran {item.size}</span>
                  <span>Telah diakses {item.hits} kali</span>
                </div>
              </div>
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-green-800 transition-colors whitespace-nowrap">
                <Download size={16} /> Unduh
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
