'use client';

import Link from 'next/link';

export default function AdminNavbar() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/admin/login';
  };

  return (
    <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <Link href="/admin/dashboard" className="flex items-center gap-2 font-bold text-primary">
        <span className="text-2xl">⚙️</span>
        <span>Bakery Naichii Admin</span>
      </Link>
      <button onClick={handleLogout} className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
        Logout
      </button>
    </nav>
  );
}
