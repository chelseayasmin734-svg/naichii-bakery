'use client';

export default function AdminReviewsPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-slate-900">Kelola Review</h1>
      <div className="glass-card rounded-2xl p-6">
        <table className="w-full">
          <thead className="border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Produk</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Rating</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Review</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Aksi</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
