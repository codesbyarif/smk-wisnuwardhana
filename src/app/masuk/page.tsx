'use client';

import { LogIn, UserPlus, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MasukPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi Login
    if (formData.username && formData.password) {
      alert(`Login Berhasil! Selamat datang, ${formData.username}`);
      router.push('/'); // Redirect ke halaman utama setelah login
    } else {
      alert('Mohon isi username dan password.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* JUDUL */}
        <h1 className="text-3xl font-bold text-center text-[#166534] mb-10 tracking-wide">Masuk</h1>

        {/* FORM LOGIN */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Username */}
          <div className="space-y-2">
            <label htmlFor="username" className="font-bold text-gray-900 block">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Masukan username..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Input Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="font-bold text-gray-900 block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukan password..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all pr-12"
                required
              />
              {/* Tombol Mata (Show/Hide Password) */}
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-700">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Tombol Actions */}
          <div className="flex gap-4 pt-4">
            {/* Tombol Masuk */}
            <button type="submit" className="bg-[#1f7a4e] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-800 transition-colors flex items-center gap-2 shadow-lg">
              <LogIn size={18} /> Masuk
            </button>

            {/* Tombol Daftar (Link ke halaman /daftar) */}
            <Link href="/daftar" className="bg-[#1f7a4e] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-800 transition-colors flex items-center gap-2 shadow-lg">
              <UserPlus size={18} /> Daftar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
