'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin/dashboard', label: '📊 Dashboard', icon: '📊' },
    { href: '/admin/products', label: '🥐 Produk', icon: '🥐' },
    { href: '/admin/categories', label: '📁 Kategori', icon: '📁' },
    { href: '/admin/orders', label: '📦 Pesanan', icon: '📦' },
    { href: '/admin/customers', label: '👥 Pelanggan', icon: '👥' },
    { href: '/admin/promotions', label: '🎉 Promo', icon: '🎉' },
    { href: '/admin/reviews', label: '⭐ Review', icon: '⭐' }
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-slate-50 p-6">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-4 py-3 font-medium transition ${
              pathname === item.href ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
