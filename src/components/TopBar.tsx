import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#15803d] text-white py-2 px-4 text-xs md:text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold hidden md:inline">SISTEM PENERIMAAN MURID BARU 2025/2026</span>
          <span className="md:hidden">PPDB 2025/2026</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CheckCircle2 size={16} />
            <span className="font-medium">PROGRAM GRATIS SERAGAM</span>
          </div>
          <Link href="/daftar" className="bg-[#a3e635] text-green-900 font-bold px-4 py-1 rounded-full text-xs hover:bg-lime-300 transition-colors">
            Ambil Promo
          </Link>
        </div>
      </div>
    </div>
  );
}
