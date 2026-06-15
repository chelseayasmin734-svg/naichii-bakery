'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';

export default function ProductCard({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <article className="glass-card overflow-hidden rounded-2xl transition-all hover:shadow-2xl">
      <div className="relative h-64">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
          ⭐ {product.rating}
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-primary">{product.category}</p>
          <h3 className="mt-1 font-semibold text-slate-900">{product.name}</h3>
        </div>
        <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>({product.reviews} ulasan)</span>
          <span>{product.stock > 0 ? `Stok ${product.stock}` : 'Habis'}</span>
        </div>
        <div className="flex items-end justify-between gap-2 pt-2">
          <p className="text-lg font-bold text-primary">Rp {product.price.toLocaleString('id-ID')}</p>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition disabled:opacity-50 hover:bg-[#b45309]"
          >
            {isAdded ? '✓ Ditambah' : 'Keranjang'}
          </button>
        </div>
      </div>
    </article>
  );
}
