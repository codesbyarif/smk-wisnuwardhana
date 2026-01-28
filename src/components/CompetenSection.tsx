// Data Jurusan (Bisa dipisah ke file data terpisah)
const majors = [
  {
    title: 'Teknik Komputer dan Informatika (TKI)',
    desc: 'Mempelajari tenaga ahli yang kompeten dalam merakit, merawat, dan mengembangkan sistem jaringan komputer.',
  },
  {
    title: 'Teknik Sepeda Motor (TSM)',
    desc: 'Fokus pada penguasaan keterampilan teknis tingkat tinggi dalam pemeliharaan sepeda motor sesuai standar industri.',
  },
  {
    title: 'Manajemen Perkantoran dan Layanan Bisnis (MPLB)',
    desc: 'Membekali siswa dengan kemampuan administrasi perkantoran modern, komunikasi bisnis, dan layanan pelanggan.',
  },
  {
    title: 'Bisnis Digital (BD)',
    desc: 'Mengembangkan kompetensi dalam strategi pemasaran online, pengelolaan e-commerce, dan analisis data bisnis.',
  },
  {
    title: 'Ilmu Pengetahuan Alam (IPA)',
    desc: 'Program ini dirancang untuk membekali siswa dengan pemahaman mendalam mengenai fenomena alam dan lingkungan.',
  },
];

export default function CompetenceSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {majors.map((item, index) => (
        <div key={index} className="bg-[#84cc16] p-8 rounded-3xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-lime-400">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg leading-snug">{item.title}</h3>
            <p className="text-sm text-gray-800 leading-relaxed">{item.desc}</p>
          </div>
          {/* Hiasan garis bawah */}
          <div className="w-10 h-1 bg-black/10 mt-6 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}
