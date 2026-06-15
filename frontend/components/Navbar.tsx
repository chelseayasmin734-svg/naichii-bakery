'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-8">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary">
            <span className="text-2xl">🥐</span>
            <span className="hidden sm:inline">Bakery Naichii</span>
          </Link>
          <div className="hidden flex-1 md:flex md:items-center md:justify-center">
            <input
              type="search"
              placeholder="Cari roti, cake, pastry..."
              className="w-full max-w-md rounded-full bg-slate-100 px-4 py-2 text-sm outline-none transition focus:bg-slate-50"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products" className="hidden text-sm font-medium text-slate-700 transition hover:text-primary md:inline">
              Produk
            </Link>
            <Link href="/cart" className="relative rounded-full bg-secondary p-2 text-primary transition hover:bg-accent/20">
              🛒<span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">0</span>
            </Link>
            <Link href="/profile" className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
              Akun
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              ☰
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 space-y-2 border-t border-slate-200 pt-4 md:hidden">
            <Link href="/products" className="block px-2 py-2 text-sm font-medium text-slate-700">
              Produk
            </Link>
            <Link href="/login" className="block px-2 py-2 text-sm font-medium text-slate-700">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
