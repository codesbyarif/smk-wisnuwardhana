// 1. Import Image dari next/image
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Center */}
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-900">Welcome to SMK Wisnuwardhana Malang</h2>
          <p className="text-sm text-gray-600 font-medium">As a vocational high school, this school provides vocational education that prepares students to enter the workforce directly or continue to higher education after graduation.</p>
        </div>

        {/* Content Split */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* --- BAGIAN YANG DIUBAH (Image) --- */}
          {/* Tambahkan 'relative' dan 'overflow-hidden' agar rounded-nya bekerja */}
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/visi-misi.jpg" // Sesuaikan dengan path gambar Anda di folder public
              alt="Gedung SMK Wisnuwardhana"
              fill // Agar gambar mengisi penuh container pembungkusnya
              className="object-cover" // Agar gambar tidak gepeng (terpotong rapi)
              sizes="(max-width: 768px) 100vw, 50vw" // Optimasi loading
            />
          </div>
          {/* ---------------------------------- */}

          {/* Text Right */}
          <div className="space-y-8 text-sm text-gray-700">
            <div>
              <h3 className="text-[#1f7a4e] font-bold mb-2 uppercase text-xs tracking-widest">Visi</h3>
              <p className="leading-relaxed">Terwujudnya Lembaga Pendidikan yang menghasilkan sumber daya manusia yang beriman dan bertaqwa, cinta tanah air dan menguasai IPTEK.</p>
            </div>

            <div>
              <h3 className="text-[#1f7a4e] font-bold mb-2 uppercase text-xs tracking-widest">Misi</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Menghasilkan lulusan SMK Wisnuwardhana yang berakhlak mulia dan berbudi pekerti luhur.</li>
                <li>Membentuk siswa yang cinta tanah air.</li>
                <li>Menghasilkan siswa yang menguasai IPTEK.</li>
                <li>Menghasilkan siswa yang berprestasi di bidang olahraga.</li>
                <li>Menghasilkan siswa yang berkompeten sesuai dengan program studinya.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
