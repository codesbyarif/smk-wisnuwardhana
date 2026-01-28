import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import CompetenceSection from '@/components/CompetenSection';
import NewsSection from '@/components/NewsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection />

      {/* Welcome & Visi Misi */}
      <WelcomeSection />

      {/* Kompetensi Title */}
      <section id="jurusan" className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Kompetensi Keahlian</h2>
        </div>
        <CompetenceSection />
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <p className="text-gray-500 text-sm">Latest update:</p>
          <h2 className="text-3xl font-bold text-gray-900">Berita dan Artikel</h2>
        </div>
        <NewsSection />
      </section>
    </main>
  );
}
