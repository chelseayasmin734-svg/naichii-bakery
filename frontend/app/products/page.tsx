'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/types';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/products');
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products]);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">Katalog Produk</h1>
          <p className="mt-2 text-slate-600">Temukan roti dan pastry favorit Anda</p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900">Kategori</h3>
              <div className="mt-4 space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full rounded-lg px-4 py-2 text-left text-sm transition ${
                      selectedCategory === cat ? 'bg-primary text-white font-semibold' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="mb-6">
              <input
                type="search"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white px-6 py-3 shadow outline-none transition focus:ring-2 focus:ring-primary"
              />
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="text-slate-600">Memuat produk...</div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-slate-300 py-12 text-center">
                <p className="text-slate-600">Produk tidak ditemukan</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
