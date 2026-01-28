import { beritaData, artikelData } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, SearchX } from 'lucide-react';

export default function PencarianPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || ''; // Ambil keyword dari URL

  // 1. Gabungkan data dan tambahkan label tipe (Berita/Artikel)
  const allContent = [...beritaData.map((item) => ({ ...item, type: 'berita', label: 'Berita' })), ...artikelData.map((item) => ({ ...item, type: 'artikel', label: 'Artikel' }))];

  // 2. Filter berdasarkan Judul (Case Insensitive)
  const results = allContent.filter((item) => item.judul.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Hasil Pencarian</h1>
        <p className="text-gray-600 mt-2">
          {/* PERBAIKAN DI SINI: Ganti " menjadi &quot; */}
          Menampilkan hasil untuk kata kunci: <span className="font-bold text-[#1f7a4e]">&quot;{query}&quot;</span>
        </p>
      </div>

      {/* JIKA TIDAK ADA HASIL */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <SearchX size={64} className="mb-4 opacity-50" />
          <h3 className="text-xl font-bold text-gray-600">Tidak ditemukan</h3>
          <p>Coba gunakan kata kunci lain.</p>
        </div>
      ) : (
        /* JIKA ADA HASIL (Tampilkan Grid) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item) => (
            <Link
              key={`${item.type}-${item.kode}`}
              href={`/${item.type}/${item.kode}`} // Link dinamis ke /berita/1 atau /artikel/1
              className="group block h-full"
            >
              <div className="bg-[#84cc16] p-4 rounded-[2rem] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Image */}
                <div className="bg-white/20 aspect-square rounded-2xl mb-4 relative overflow-hidden border border-white/20">
                  <Image src={item.image} alt={item.judul} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 px-1">
                  <div>
                    <span className="inline-block px-3 py-1 bg-black/10 rounded-full text-[10px] font-bold uppercase mb-3 text-green-900">{item.label}</span>
                    <h3 className="font-bold text-sm text-gray-900 uppercase leading-snug line-clamp-3">{item.judul}</h3>
                  </div>

                  <span className="flex items-center gap-2 text-xs font-bold mt-4 hover:underline text-gray-900">
                    Baca Selengkapnya <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
