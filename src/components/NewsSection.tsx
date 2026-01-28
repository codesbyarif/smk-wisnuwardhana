import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { beritaData, artikelData } from '@/data/content';

export default function NewsSection() {
  // Ambil 2 Berita terbaru dan 2 Artikel terbaru untuk ditampilkan di Home
  const featuredBerita = beritaData.slice(0, 2).map((item) => ({ ...item, type: 'News', link: '/berita' }));
  const featuredArtikel = artikelData.slice(0, 2).map((item) => ({ ...item, type: 'Article', link: '/artikel' }));

  // Gabungkan
  const displayItems = [...featuredBerita, ...featuredArtikel];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayItems.map((item, idx) => (
        <Link key={`${item.type}-${item.kode}`} href={`${item.link}/${item.kode}`} className="group block h-full">
          <div className="bg-[#84cc16] p-4 rounded-[2rem] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            {/* Image Placeholder */}
            <div className="bg-white/20 aspect-square rounded-2xl mb-4 relative overflow-hidden border border-white/20">
              <Image src={item.image} alt={item.judul} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="flex flex-col justify-between flex-1 px-1">
              <div>
                <span className="inline-block px-3 py-1 bg-black/10 rounded-full text-[10px] font-bold uppercase mb-3 text-green-900">{item.type}</span>
                <h3 className="font-bold text-sm text-gray-900 uppercase leading-snug line-clamp-3">{item.judul}</h3>
              </div>

              <span className="flex items-center gap-2 text-xs font-bold mt-4 hover:underline text-gray-900">
                Read more <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
