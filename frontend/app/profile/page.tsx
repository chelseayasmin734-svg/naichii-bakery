'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Order } from '@/lib/types';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      window.location.href = '/login';
      return;
    }
    setUser(JSON.parse(userData));
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  if (loading) return <div className="flex justify-center py-12">Loading...</div>;
  if (!user) return null;

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <h1 className="mb-8 text-4xl font-bold text-slate-900">Profil Saya</h1>

        <div className="glass-card rounded-2xl p-6">
          <div className="mb-6 flex flex-col items-center gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl text-white">👤</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{user.name}</h2>
              <p className="text-slate-600">{user.email}</p>
              <p className="text-sm uppercase tracking-widest text-primary">{user.role}</p>
            </div>
          </div>

          <div className="mb-6 flex gap-2 border-b border-slate-200">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 font-medium transition ${activeTab === 'profile' ? 'border-b-2 border-primary text-primary' : 'text-slate-600'}`}
            >
              Profil
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 font-medium transition ${activeTab === 'orders' ? 'border-b-2 border-primary text-primary' : 'text-slate-600'}`}
            >
              Pesanan
            </button>
          </div>

          {activeTab === 'profile' && (
            <div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-900">Nama</label>
                  <input type="text" value={user.name} disabled className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-900">Email</label>
                  <input type="email" value={user.email} disabled className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2" />
                </div>
                <div className="flex gap-4 pt-4">
                  <button className="rounded-full border border-primary px-6 py-2 font-semibold text-primary transition hover:bg-primary/10">Ubah Password</button>
                  <button onClick={handleLogout} className="rounded-full bg-red-500 px-6 py-2 font-semibold text-white transition hover:bg-red-600">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              {orders.length === 0 ? (
                <div className="py-8 text-center text-slate-600">
                  <p>Belum ada pesanan</p>
                  <Link href="/products" className="mt-4 inline-flex rounded-full bg-primary px-6 py-2 font-semibold text-white">
                    Belanja Sekarang
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="rounded-lg border border-slate-200 p-4">
                      <p>Order #{order.id}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
