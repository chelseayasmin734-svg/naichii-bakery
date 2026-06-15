import Image from 'next/image';
import { Product } from '@/lib/products';

export default function ProductGallery({ initialProducts }: { initialProducts: Product[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {initialProducts.map((product) => (
        <article key={product.id} className="glass-card overflow-hidden rounded-[2rem]">
          <div className="relative h-72">
            <Image src={product.images[0]} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary">{product.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h3>
              </div>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-sm font-semibold text-orange-800">Rp {product.price.toLocaleString('id-ID')}</span>
            </div>
            <p className="text-sm leading-6 text-slate-600">{product.description}</p>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <p>{product.rating} ★ ({product.reviews})</p>
              <p>Stok {product.stock}</p>
            </div>
            <button className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b45309]">Tambah ke Keranjang</button>
          </div>
        </article>
      ))}
    </div>
  );
}
