'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', categoryId: 1, price: 0, stock: 0, description: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setShowForm(false);
        setFormData({ name: '', categoryId: 1, price: 0, stock: 0, description: '' });
        // Refresh products list
        const updatedRes = await fetch('http://localhost:4000/api/products');
        const data = await updatedRes.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Kelola Produk</h1>
        <button onClick={() => setShowForm(!showForm)} className="rounded-full bg-primary px-6 py-2 font-semibold text-white">
          {showForm ? '❌ Batal' : '➕ Produk Baru'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-8 glass-card rounded-2xl p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nama Produk"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="number"
              placeholder="Harga"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
              className="rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="number"
              placeholder="Stok"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
              className="rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <select
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: parseInt(e.target.value) })}
              className="rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
            >
              <option value={1}>Croissant</option>
              <option value={2}>Roti Manis</option>
              <option value={3}>Cake</option>
              <option value={4}>Pastry</option>
              <option value={5}>Donat</option>
              <option value={6}>Cookies</option>
              <option value={7}>Paket Sarapan</option>
            </select>
          </div>
          <textarea
            placeholder="Deskripsi"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-4 w-full rounded-lg border border-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
            rows={3}
            required
          />
          <button type="submit" className="mt-4 w-full rounded-full bg-primary py-2 font-semibold text-white">
            Tambah Produk
          </button>
        </form>
      )}

      {loading ? (
        <div className="flex justify-center py-12">Loading...</div>
      ) : (
        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Nama</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Harga</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Stok</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Rating</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {products.map((product: any) => (
                <tr key={product.id} className="hover:bg-slate-50">
                  <td className="px-6 py-3 text-sm text-slate-900">{product.name}</td>
                  <td className="px-6 py-3 text-sm text-slate-900">Rp {product.price.toLocaleString('id-ID')}</td>
                  <td className="px-6 py-3 text-sm text-slate-900">{product.stock}</td>
                  <td className="px-6 py-3 text-sm text-slate-900">⭐ {product.rating}</td>
                  <td className="px-6 py-3 text-sm">
                    <button className="text-primary hover:underline">Edit</button>
                    <button className="ml-4 text-red-500 hover:underline">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
