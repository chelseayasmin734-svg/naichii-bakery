'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    courier: 'JNE',
    paymentMethod: 'QRIS'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pesanan berhasil dibuat!');
  };

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <h1 className="mb-10 text-4xl font-bold text-slate-900">Checkout</h1>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-4 font-semibold text-slate-900">Informasi Pengiriman</h3>
                <div className="space-y-4">
                  <input type="text" name="name" placeholder="Nama Lengkap" onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary" required />
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary" required />
                  <input type="tel" name="phone" placeholder="Nomor Telepon" onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary" required />
                  <textarea name="address" placeholder="Alamat Lengkap" onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary" rows={3} required />
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-4 font-semibold text-slate-900">Pengiriman</h3>
                <select name="courier" value={formData.courier} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary">
                  <option>JNE</option>
                  <option>GCG</option>
                  <option>Shopee Express</option>
                </select>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-4 font-semibold text-slate-900">Pembayaran</h3>
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary">
                  <option value="QRIS">QRIS</option>
                  <option value="DANA">DANA</option>
                  <option value="OVO">OVO</option>
                  <option value="GoPay">GoPay</option>
                  <option value="Midtrans">Midtrans</option>
                </select>
              </div>

              <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-[#b45309]">
                Pesan Sekarang
              </button>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="glass-card sticky top-20 rounded-2xl p-6">
              <h3 className="mb-4 font-semibold text-slate-900">Ringkasan Pesanan</h3>
              <div className="space-y-2 border-b border-slate-200 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-medium">Rp 0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Ongkir</span>
                  <span className="font-medium">Rp 0</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-primary">Rp 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
