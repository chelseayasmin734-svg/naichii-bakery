import HeroSection from '@/components/HeroSection';
import ProductGallery from '@/components/ProductGallery';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import { categories, featuredProducts } from '@/lib/products';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary">Katalog Premium</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Produk terbaik dari Bakery Naichii</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Pilih roti dan pastry fresh yang dibuat setiap hari dengan bahan berkualitas premium.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <div key={category.name} className="glass-card rounded-3xl p-6 text-center transition hover:-translate-y-1">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl">{category.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="produk" className="bg-[#fff7ed] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary">Rekomendasi</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Produk terlaris dan terbaru</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600">Filter produk dengan kategori dan temukan camilan favorit Anda.</p>
          </div>
          <ProductGallery initialProducts={featuredProducts} />
        </div>
      </section>
      <FeatureSection />
      <Footer />
    </main>
  );
}
