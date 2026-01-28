import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { artikelData } from '@/data/content';

export default function ArtikelPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">Artikel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artikelData.map((item) => (
          <Link key={item.kode} href={`/artikel/${item.kode}`} className="group block h-full">
            <div className="bg-[#84cc16] p-4 rounded-[2rem] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="bg-gray-100 aspect-square rounded-2xl mb-4 relative overflow-hidden border border-white/20">
                <Image src={item.image} alt={item.judul} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 px-1">
                <h3 className="font-bold text-gray-900 text-sm md:text-base mb-4 line-clamp-3 leading-snug">{item.judul}</h3>

                <span className="self-end flex items-center gap-1 text-xs font-bold text-gray-900 group-hover:underline mt-auto">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
