import { Target, History, Handshake } from 'lucide-react';
import Image from 'next/image'; // 1. Import Image

export default function ProfilPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12 max-w-5xl">
      {/* SECTION 1: VISI DAN MISI (Tetap sama) */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex justify-center items-center gap-2">
            <Target className="w-8 h-8" /> Visi dan Misi
          </h1>
        </div>

        <div className="space-y-6 text-gray-900">
          <div>
            <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Visi</h3>
            <p className="leading-relaxed font-medium">Terwujudnya Lembaga Pendidikan yang menghasilkan sumber daya manusia yang beriman dan bertaqwa, cinta tanah air dan menguasai IPTEK.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Misi</h3>
            <ul className="list-disc pl-5 space-y-2 font-medium">
              <li>Menghasilkan lulusan SMK Wisnuwardhana yang berakhlak mulia dan berbudi pekerti yang luhur (iman dan taqwa).</li>
              <li>Membentuk siswa yang cinta tanah air.</li>
              <li>Menghasilkan siswa yang menguasai IPTEK.</li>
              <li>Menghasilkan siswa yang berprestasi di bidang olahraga.</li>
              <li>Menghasilkan siswa yang berkompeten sesuai dengan program studinya.</li>
              <li>Menghasilkan siswa yang memiliki kemampuan berbahasa asing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: SEJARAH SINGKAT */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex justify-center items-center gap-2">
          <History className="w-8 h-8" /> Sejarah Singkat
        </h2>

        {/* --- UPDATE: GAMBAR GEDUNG --- */}
        <div className="relative w-full max-w-md mx-auto aspect-video rounded-xl overflow-hidden mb-8 shadow-lg border-4 border-white/20">
          <Image
            src="/images/profil/gedung.jpg" // Pastikan file ada di folder public/images/profil
            alt="Gedung SMK Wisnuwardhana"
            fill
            className="object-cover"
          />
        </div>
        {/* ----------------------------- */}

        <p className="text-gray-900 font-medium leading-relaxed text-justify md:text-center">
          SMK Wisnuwardhana Malang didirikan pada tahun 1989 sebagai bentuk pengabdian untuk bangsa dan negara Republik Indonesia. Sekolah ini didirikan dalam rangka ikut peran serta dalam mandiri dan membimbing anak bangsa agar mampu
          menjadi pribadi-pribadi yang mandiri, berwawasan berilmu, serta berakhlak mulia yang berguna bagi nusa dan bangsa Indonesia.
        </p>
      </section>

      {/* SECTION 3: KEPALA SEKOLAH */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Kepala Sekolah</h2>

        <div className="flex flex-col items-center">
          {/* --- UPDATE: FOTO KEPALA SEKOLAH --- */}
          <div className="relative w-48 h-56 rounded-xl overflow-hidden mb-6 shadow-lg border-4 border-white/20 bg-gray-200">
            <Image
              src="/images/profil/kepala-sekolah.jpg" // Pastikan file ada
              alt="Dr. Drs. H. Moh. Saifullah, M.Pd"
              fill
              className="object-cover"
            />
          </div>
          {/* ----------------------------------- */}

          <h3 className="text-xl font-bold text-gray-900">Dr. Drs. H. Moh. Saifullah, M.Pd</h3>
          <p className="text-gray-800 font-medium mt-1">Kepala Sekolah SMK Wisnuwardhana Malang Jawa Timur</p>
        </div>
      </section>

      {/* SECTION 4: KEMITRAAN */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 flex justify-center items-center gap-2">
          <Handshake className="w-8 h-8" /> KEMITRAAN
        </h2>

        {/* --- UPDATE: LOGO MITRA --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {/* Logo 1 (Misal: Logo Dinas/Yayasan) */}
          <div className="bg-white p-4 rounded-xl w-32 h-32 flex items-center justify-center shadow-md relative overflow-hidden">
            <Image src="/images/mitra/pemkot.jpg" alt="Mitra 1" fill className="object-contain p-2" />
          </div>

          {/* Logo 2 (Sarinah) */}
          <div className="bg-white p-4 rounded-xl w-32 h-32 flex items-center justify-center shadow-md relative overflow-hidden">
            <Image src="/images/mitra/sarinah.jpg" alt="Sarinah" fill className="object-contain p-2" />
          </div>

          {/* Logo 3 (Brawijaya) */}
          <div className="bg-white p-4 rounded-xl w-32 h-32 flex items-center justify-center shadow-md relative overflow-hidden">
            <Image src="/images/mitra/brawijaya.jpg" alt="Univ Brawijaya" fill className="object-contain p-2" />
          </div>

          {/* Logo 4 (Ramayana) */}
          <div className="bg-white p-4 rounded-xl w-32 h-32 flex items-center justify-center shadow-md relative overflow-hidden">
            <Image src="/images/mitra/ramayana.jpg" alt="Ramayana" fill className="object-contain p-2" />
          </div>
        </div>
        {/* -------------------------- */}
      </section>
    </div>
  );
}
