export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  stock: number;
  description: string;
  images: string[];
};

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  variant?: string;
};

export type Order = {
  id: number;
  status: 'Menunggu Pembayaran' | 'Diproses' | 'Dikirim' | 'Selesai' | 'Dibatalkan';
  items: CartItem[];
  totalAmount: number;
  createdAt: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: 'admin' | 'customer';
};
