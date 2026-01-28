import { Tent, Music, Flag, Users } from 'lucide-react'; // Import ikon opsional untuk mempercantik

export default function SiswaPage() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh]">
      {/* min-h-[60vh] agar footer tidak naik terlalu tinggi jika konten sedikit */}

      {/* CARD EKSTRAKURIKULER */}
      <section className="bg-[#84cc16] rounded-[2rem] p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
        {/* Judul Section */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Ekstrakurikuler</h1>

        {/* List Ekstrakurikuler */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20">
          <ul className="space-y-4">
            {/* Item 1: PASKIB */}
            <li className="flex items-center gap-4 text-gray-900 font-bold text-lg">
              <span className="bg-white p-2 rounded-full shadow-sm">
                <Flag className="w-6 h-6 text-green-700" />
              </span>
              PASKIB
            </li>

            {/* Item 2: BANJARI */}
            <li className="flex items-center gap-4 text-gray-900 font-bold text-lg">
              <span className="bg-white p-2 rounded-full shadow-sm">
                <Music className="w-6 h-6 text-green-700" />
              </span>
              BANJARI
            </li>

            {/* Item 3: PRAMUKA */}
            <li className="flex items-center gap-4 text-gray-900 font-bold text-lg">
              <span className="bg-white p-2 rounded-full shadow-sm">
                <Tent className="w-6 h-6 text-green-700" />
              </span>
              PRAMUKA
            </li>

            {/* Item 4: TARI */}
            <li className="flex items-center gap-4 text-gray-900 font-bold text-lg">
              <span className="bg-white p-2 rounded-full shadow-sm">
                <Users className="w-6 h-6 text-green-700" />
              </span>
              TARI
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
