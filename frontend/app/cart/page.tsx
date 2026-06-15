'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [items, setItems] = useState([]);
  const [voucher, setVoucher] = useState('');

  const subtotal = 0;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h1 className="mb-10 text-4xl font-bold text-slate-900">Keranjang Belanja</h1>

        {items.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 py-16 text-center">
            <p className="mb-4 text-xl text-slate-600">Keranjang masih kosong</p>
            <Link href="/products" className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white">
              Lanjut Belanja
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6">
                <p className="text-slate-600">Items akan ditampilkan di sini</p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-4 font-semibold text-slate-900">Ringkasan Pesanan</h3>
                <div className="space-y-2 border-b border-slate-200 pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Subtotal</span>
                    <span className="font-medium">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Ongkir</span>
                    <span className="font-medium">Rp {shipping.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">Rp {total.toLocaleString('id-ID')}</span>
                </div>
                <Link href="/checkout" className="mt-6 block w-full rounded-full bg-primary py-3 text-center font-semibold text-white transition hover:bg-[#b45309]">
                  Lanjut Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
