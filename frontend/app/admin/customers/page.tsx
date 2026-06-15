'use client';

export default function AdminCustomersPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-slate-900">Kelola Pelanggan</h1>
      <div className="glass-card rounded-2xl p-6">
        <table className="w-full">
          <thead className="border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Nama</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Telepon</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Total Transaksi</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
