import { ArrowLeft, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { beritaData } from '@/data/content';
import { notFound } from 'next/navigation';

export default function DetailBerita({ params }: { params: { id: string } }) {
  // Cari berita berdasarkan ID (kode)
  const berita = beritaData.find((item) => item.kode === Number(params.id));

  // Jika tidak ketemu, lempar ke 404
  if (!berita) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <Link href="/berita" className="inline-flex items-center gap-2 text-green-800 font-bold mb-6 hover:underline">
        <ArrowLeft size={20} /> Kembali ke Berita
      </Link>

      <article className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-12 shadow-lg text-gray-900">
        {/* Judul */}
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-[#166534] leading-tight">{berita.judul}</h1>

        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-4 py-1 rounded-full">
            <Calendar size={14} /> Berita Sekolah
          </span>
        </div>

        {/* Gambar Utama */}
        <div className="w-full aspect-video md:aspect-[2/1] rounded-3xl mb-10 relative overflow-hidden shadow-md">
          <Image src={berita.image} alt={berita.judul} fill className="object-cover" priority />
        </div>

        {/* Isi Konten */}
        {/* whitespace-pre-line berguna agar enter/baris baru terbaca */}
        <div className="prose prose-lg max-w-none text-gray-800 font-medium leading-relaxed text-justify whitespace-pre-line">{berita.isi}</div>
      </article>
    </div>
  );
}
