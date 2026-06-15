'use client';

export default function AdminCategoriesPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900">Kelola Kategori</h1>
        <button className="rounded-full bg-primary px-6 py-2 font-semibold text-white">➕ Kategori Baru</button>
      </div>
      <div className="glass-card rounded-2xl p-6">
        <table className="w-full">
          <thead className="border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Nama</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
