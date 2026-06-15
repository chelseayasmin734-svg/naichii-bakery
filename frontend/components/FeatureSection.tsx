export default function FeatureSection() {
  return (
    <section id="promo" className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="glass-card rounded-[2rem] p-10">
          <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">Keunggulan</span>
          <h2 className="mt-6 text-4xl font-semibold text-slate-900">Kenapa memilih Bakery Naichii?</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Kami menghadirkan menu roti fresh dengan bahan premium, dikemas rapi, dan didukung layanan pesan cepat untuk pengalaman belanja yang nyaman.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              'Fresh setiap hari',
              'Bahan premium pilihan',
              'Pengiriman aman & higienis',
              'Promo dan voucher reguler'
            ].map((feature) => (
              <div key={feature} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                <p className="font-semibold text-slate-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Produk Terlaris', description: 'Kelas premium yang selalu laris setiap hari.' },
            { title: 'Live Chat WhatsApp', description: 'Bantuan cepat untuk pertanyaan dan pesanan.' },
            { title: 'Promo Otomatis', description: 'Banner promo yang selalu diperbarui secara real-time.' },
            { title: 'PWA Ready', description: 'Akses laundry dari perangkat mobile dengan mudah.' }
          ].map((card) => (
            <div key={card.title} className="glass-card rounded-[1.75rem] p-7">
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-4 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
