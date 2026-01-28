import { ArrowLeft, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { artikelData } from '@/data/content';
import { notFound } from 'next/navigation';

export default function DetailArtikel({ params }: { params: { id: string } }) {
  const artikel = artikelData.find((item) => item.kode === Number(params.id));

  if (!artikel) return notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <Link href="/artikel" className="inline-flex items-center gap-2 text-green-800 font-bold mb-6 hover:underline">
        <ArrowLeft size={20} /> Kembali ke Artikel
      </Link>

      <article className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-12 shadow-lg text-gray-900">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-[#166534] leading-tight">{artikel.judul}</h1>

        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full">
            <BookOpen size={14} /> Artikel Edukasi
          </span>
        </div>

        <div className="w-full aspect-video md:aspect-[2/1] rounded-3xl mb-10 relative overflow-hidden shadow-md">
          <Image src={artikel.image} alt={artikel.judul} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 font-medium leading-relaxed text-justify whitespace-pre-line">{artikel.isi}</div>
      </article>
    </div>
  );
}
