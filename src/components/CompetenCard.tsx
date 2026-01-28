// components/CompetenceCard.tsx
interface CompetenceCardProps {
  title: string;
  description: string;
}

export default function CompetenceCard({ title, description }: CompetenceCardProps) {
  return (
    <div className="bg-primary hover:bg-green-500 transition-colors p-6 rounded-2xl text-black border border-green-400 h-full flex flex-col justify-between">
      {/* Judul Jurusan */}
      <h3 className="font-bold text-lg mb-4 border-b border-black/10 pb-2">{title}</h3>

      {/* Deskripsi */}
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
