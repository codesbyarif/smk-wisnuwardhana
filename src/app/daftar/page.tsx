import { ClipboardList, Mail } from 'lucide-react';
import Link from 'next/link';

export default function DaftarPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh] flex items-center justify-center">
      {/* Container Utama */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm w-full max-w-4xl">
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center gap-3">
          <ClipboardList className="w-10 h-10" />
          Prosedur Pendaftaran
        </h1>

        {/* List Prosedur */}
        <div className="bg-white/10 p-6 md:p-8 rounded-xl border border-white/20">
          <ol className="list-decimal list-outside space-y-4 text-gray-900 font-bold md:text-lg pl-5">
            <li className="pl-2">Siswa/Orang tua dapat menghubungi langsung di sekolah melalui Tim IT SMK WISNUWARDHANA MALANG</li>
            <li className="pl-2">Setelah didaftarkan langsung oleh Admin, silahkan cek email Anda untuk verifikasi data.</li>
            <li className="pl-2">Silahkan login ke sistem member tersebut.</li>
            <li className="pl-2">
              Atau pendaftaran melalui email{' '}
              <a href="mailto:smkwisnuwardhana@gmail.com" className="underline hover:text-white transition-colors">
                smkwisnuwardhana@gmail.com
              </a>
            </li>
            <li className="pl-2">Tunggu konfirmasi validasi data Anda melalui email Anda</li>
          </ol>
        </div>

        {/* Tombol Tambahan (Opsional untuk UX) */}
        <div className="mt-8 text-center">
          <Link href="mailto:smkwisnuwardhana@gmail.com" className="inline-flex items-center gap-2 bg-[#166534] text-white px-6 py-3 rounded-full font-bold hover:bg-green-900 transition-colors shadow-lg">
            <Mail size={20} /> Hubungi Kami via Email
          </Link>
        </div>
      </section>
    </div>
  );
}
