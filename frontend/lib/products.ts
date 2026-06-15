export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
  description: string;
  images: string[];
};

export const categories = [
  { name: 'Croissant', description: 'Lapis renyah dan lembut', icon: '🥐' },
  { name: 'Roti Manis', description: 'Roti manis untuk sarapan', icon: '🍞' },
  { name: 'Cake', description: 'Kue premium untuk momen spesial', icon: '🍰' },
  { name: 'Pastry', description: 'Pastry fresh dan lezat', icon: '🥧' },
  { name: 'Donat', description: 'Donat lembut dengan topping istimewa', icon: '🍩' },
  { name: 'Cookies', description: 'Cookies renyah dan kacang', icon: '🍪' },
  { name: 'Paket Sarapan', description: 'Kombinasi sarapan hangat', icon: '☕' }
];

export const featuredProducts: Product[] = [
  {
    id: 'croissant-butter-premium',
    name: 'Croissant Butter Premium',
    category: 'Croissant',
    price: 42000,
    rating: 4.9,
    reviews: 218,
    stock: 32,
    description: 'Croissant renyah dengan lapisan butter premium, dibuat fresh setiap hari.',
    images: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548365328-3344f98aa1d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'chocolate-croissant',
    name: 'Chocolate Croissant',
    category: 'Croissant',
    price: 45000,
    rating: 4.8,
    reviews: 164,
    stock: 24,
    description: 'Croissant isi cokelat lumer dengan aroma mentega yang menggoda.',
    images: [
      'https://images.unsplash.com/photo-1601047118693-2f0ab699d86f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527515544005-4d8d7e462af8?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'almond-croissant',
    name: 'Almond Croissant',
    category: 'Croissant',
    price: 47000,
    rating: 4.9,
    reviews: 142,
    stock: 18,
    description: 'Croissant almond renyah dengan taburan kacang premium dan gula halus.',
    images: [
      'https://images.unsplash.com/photo-1434494878577-86c23a4479d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];
