'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
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

      if (!res.ok) {
        setError('Email atau password salah');
        return;
      }

      const data = await res.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = data.user.role === 'admin' ? '/admin/dashboard' : '/profile';
    } catch (err) {
      setError('Terjadi kesalahan saat login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-md px-6">
        <div className="glass-card rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-slate-900">Login</h1>
          <p className="mt-2 text-slate-600">Masuk ke akun Bakery Naichii Anda</p>

          {error && <div className="mt-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700">{error}</div>}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              {loading ? 'Memproses...' : 'Login'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Belum punya akun?{' '}
            <Link href="/register" className="font-semibold text-primary">
              Daftar di sini
            </Link>
          </p>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="mb-3 text-sm font-medium text-slate-900">Demo Admin:</p>
            <p className="text-xs text-slate-600">Email: admin@naichii.com</p>
            <p className="text-xs text-slate-600">Password: Admin123@</p>
          </div>
        </div>
      </div>
    </main>
  );
}
