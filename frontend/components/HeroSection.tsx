import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.2),_transparent_38%)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl text-slate-900">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-orange-700">Bakery Naichii</span>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-6xl">Fresh From Oven Every Day</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Temukan roti, pastry, dan kue premium dengan aroma hangat dan tekstur lembut yang dibuat fresh setiap hari.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#produk" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b45309]">Belanja Sekarang</a>
            <a href="#promo" className="inline-flex items-center justify-center rounded-full border border-primary bg-white px-8 py-4 text-sm font-semibold text-primary transition hover:bg-primary/10">Lihat Promo</a>
          </div>
        </div>
        <div className="relative rounded-[2rem] bg-white/85 p-4 shadow-2xl shadow-orange-100/30 backdrop-blur-xl sm:p-6">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[1.75rem]">
            <Image
              src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=80"
              alt="Bakery Naichii premium bakery oven"
              priority
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
