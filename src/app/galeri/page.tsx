import { PlayCircle, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- DATA FOTO (Edit di sini) ---
const photoData = [
  { id: 1, title: 'Kegiatan Paskibraka', src: '/images/galeri/foto1.jpg' },
  { id: 2, title: 'Foto Bersama Guru dan TNI', src: '/images/galeri/foto2.jpg' },
  { id: 3, title: 'Foto Para Guru', src: '/images/galeri/foto3.jpg' },
  { id: 4, title: 'Siswa Melakukan Uji Coba Ekoenzim', src: '/images/galeri/foto4.jpg' },
  { id: 5, title: 'Guru Mengajar tentang Ekoenzim', src: '/images/galeri/foto5.jpg' },
  { id: 6, title: 'Foto Cairan Ekoenzim', src: '/images/galeri/foto6.jpg' },
];

// --- DATA VIDEO (Edit di sini) ---
const videoData = [
  { id: 1, title: 'Pondok Romadhon 1444H SMA-SMK Wisnuwardhana Malang', url: 'https://www.youtube.com/watch?v=0Hyv67ase-s' },
  { id: 2, title: 'Literasi sejarah budaya "Pasar Splindit in"', url: 'https://www.youtube.com/watch?v=O2fhPpw3eJg' }, // Ganti linknya
  { id: 3, title: 'Kegiatan UKK Siswa SMK Wisnuwardhana Malang tahun Pelajaran 2023', url: 'https://www.youtube.com/watch?v=tgC6FWf0EuY' }, // Ganti linknya
  { id: 4, title: 'Candi Jago', url: 'https://www.youtube.com/watch?v=Wbmqo4fJ80g' }, // Ganti linknya
  { id: 5, title: 'TAHUN BARU, SEMESTER BARU, SEMANGAT BARU', url: 'https://www.youtube.com/watch?v=KiO7b7gu2MQ' }, // Ganti linknya
  { id: 6, title: 'PPDB SMA-SMK WISNUWARDHANA MALANG TAHUN AJARAN 2023/2024', url: 'https://www.youtube.com/watch?v=Wv2OB5Amu8A' }, // Ganti linknya
];

// --- Helper: Ambil ID Youtube untuk Thumbnail ---
const getYouTubeID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function GaleriPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 max-w-7xl min-h-screen">
      {/* --- BAGIAN 1: GALERI FOTO --- */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-l-4 border-[#84cc16] pl-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">Galeri Foto</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photoData.map((item) => (
            <div key={item.id} className="bg-[#84cc16] p-4 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              {/* Image Container */}
              <div className="bg-white/20 aspect-square rounded-2xl mb-4 relative overflow-hidden border border-white/20">
                <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>

              {/* Caption */}
              <p className="text-center font-bold text-gray-900 text-sm md:text-base px-2 leading-tight">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BAGIAN 2: GALERI VIDEO --- */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-l-4 border-[#84cc16] pl-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">Galeri Video</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videoData.map((item) => {
            const videoID = getYouTubeID(item.url);
            const thumbnail = videoID ? `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg` : '/images/placeholder-video.jpg'; // Fallback jika link salah

            return (
              <div key={item.id} className="bg-[#84cc16] p-4 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  {/* Video Thumbnail Container */}
                  <div className="bg-black aspect-video rounded-2xl mb-4 relative overflow-hidden border-2 border-white/20 shadow-inner group-hover:border-white transition-colors">
                    {/* Thumbnail Image */}
                    <Image src={thumbnail} alt={item.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />

                    {/* Tombol Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-[#1f7a4e] group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg z-10">
                        <PlayCircle size={32} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="text-center font-bold text-gray-900 text-sm md:text-base px-2 leading-tight group-hover:underline">{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
