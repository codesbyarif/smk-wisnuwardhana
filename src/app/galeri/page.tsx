import { Image as ImageIcon, PlayCircle } from 'lucide-react';

export default function GaleriPage() {
  // Data Dummy untuk Foto (8 item sesuai gambar)
  const photos = Array(8).fill({ title: 'Judul Gambar' });

  // Data Dummy untuk Video (8 item sesuai gambar)
  const videos = Array(8).fill({ title: 'Judul Video' });

  return (
    <div className="container mx-auto px-4 py-12 space-y-16 max-w-7xl">
      {/* --- BAGIAN 1: GALERI FOTO --- */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide border-l-4 border-[#84cc16] pl-4">Galeri Foto</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((item, index) => (
            <div key={index} className="bg-[#84cc16] p-4 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              {/* Image Placeholder */}
              <div className="bg-gray-300 aspect-square rounded-2xl flex items-center justify-center mb-4 overflow-hidden relative">
                <ImageIcon className="w-12 h-12 text-gray-500 opacity-50 group-hover:scale-110 transition-transform" />

                {/* Overlay effect saat hover (opsional) */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Caption */}
              <p className="text-center font-bold text-gray-900 text-sm md:text-base">
                {item.title} {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BAGIAN 2: GALERI VIDEO --- */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide border-l-4 border-[#84cc16] pl-4">Galeri Video</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((item, index) => (
            <div key={index} className="bg-[#84cc16] p-4 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              {/* Video Placeholder */}
              <div className="bg-gray-300 aspect-square rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden">
                {/* Tombol Play */}
                <div className="w-14 h-14 bg-black/70 rounded-full flex items-center justify-center text-white z-10 group-hover:bg-red-600 transition-colors shadow-lg">
                  <PlayCircle size={32} fill="white" className="ml-1" />
                </div>

                {/* Background placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <ImageIcon className="w-full h-full p-10 text-gray-500" />
                </div>
              </div>

              {/* Caption */}
              <p className="text-center font-bold text-gray-900 text-sm md:text-base">
                {item.title} {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
