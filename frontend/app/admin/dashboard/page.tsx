'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/stats', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        const data = await res.json();
        setStats({
          totalProducts: data.total_products,
          totalOrders: data.total_orders,
          totalCustomers: data.total_customers,
          totalRevenue: data.total_revenue
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-slate-900">Dashboard</h1>

      {loading ? (
        <div className="flex justify-center py-12">Loading...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Produk', value: stats.totalProducts, color: 'primary' },
            { label: 'Total Pesanan', value: stats.totalOrders, color: 'accent' },
            { label: 'Total Pelanggan', value: stats.totalCustomers, color: 'orange-500' },
            { label: 'Total Pendapatan', value: `Rp ${stats.totalRevenue.toLocaleString('id-ID')}`, color: 'green-500' }
          ].map((stat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6">
              <p className="text-sm text-slate-600">{stat.label}</p>
              <p className={`mt-2 text-3xl font-bold text-${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
