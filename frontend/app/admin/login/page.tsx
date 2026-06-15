'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok || data.user.role !== 'admin') {
        setError('Email atau password salah, atau akun bukan admin');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/admin/dashboard';
    } catch (err) {
      setError('Terjadi kesalahan saat login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 px-6">
      <div className="glass-card max-w-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-slate-900">Admin Login</h1>
        <p className="mt-2 text-slate-600">Masuk ke dashboard Bakery Naichii</p>

        {error && <div className="mt-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700">{error}</div>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Admin"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button type="submit" disabled={loading} className="w-full rounded-full bg-primary py-2 font-semibold text-white transition hover:bg-[#b45309] disabled:opacity-50">
            {loading ? 'Memproses...' : 'Login Admin'}
          </button>
        </form>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="mb-3 text-sm font-medium text-slate-900">Demo Admin:</p>
          <p className="text-xs text-slate-600 font-mono">admin@naichii.com</p>
          <p className="text-xs text-slate-600 font-mono">Admin123@</p>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          <Link href="/" className="font-semibold text-primary">
            Kembali ke Toko
          </Link>
        </p>
      </div>
    </main>
  );
}
