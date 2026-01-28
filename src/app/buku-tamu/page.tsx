'use client'; // Wajib untuk interaksi form (klik tombol reset/submit)

import { Send, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export default function BukuTamuPage() {
  // State untuk menghandle input (opsional, agar tombol Reset bekerja real-time)
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    alamat: '',
    komentar: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({ nama: '', email: '', alamat: '', komentar: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim (Simulasi).');
    handleReset();
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl min-h-[70vh]">
      {/* JUDUL */}
      <h1 className="text-3xl font-bold text-center text-[#166534] mb-10 uppercase tracking-wide">Buku Tamu</h1>

      {/* FORM CONTAINER */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Nama */}
        <div className="space-y-2">
          <label htmlFor="nama" className="font-bold text-gray-900 block">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukan nama..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Input Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="font-bold text-gray-900 block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukan email..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            required
          />
        </div>

        {/* Input Alamat */}
        <div className="space-y-2">
          <label htmlFor="alamat" className="font-bold text-gray-900 block">
            Alamat
          </label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            // Di gambar tertulis "Masukan email..." tapi saya koreksi jadi "alamat" agar logis
            placeholder="Masukan alamat..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Input Komentar */}
        <div className="space-y-2">
          <label htmlFor="komentar" className="font-bold text-gray-900 block">
            Komentar
          </label>
          <textarea
            id="komentar"
            name="komentar"
            value={formData.komentar}
            onChange={handleChange}
            placeholder="Masukan komentar..."
            rows={5}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
            required
          ></textarea>
        </div>

        {/* Tombol Action */}
        <div className="flex gap-4 pt-4">
          <button type="submit" className="bg-[#1f7a4e] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-800 transition-colors flex items-center gap-2 shadow-lg">
            <Send size={18} /> Kirim
          </button>

          <button type="button" onClick={handleReset} className="bg-[#1f7a4e] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-800 transition-colors flex items-center gap-2 shadow-lg">
            <RotateCcw size={18} /> Reset
          </button>
        </div>
      </form>
    </div>
  );
}
