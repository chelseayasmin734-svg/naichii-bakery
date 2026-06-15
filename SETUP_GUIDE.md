# Bakery Naichii - E-Commerce Full-Stack Application

Platform e-commerce modern untuk toko roti dan pastry premium "Bakery Naichii" dengan desain seperti Shopee dan Tokopedia.

## 🎯 Fitur Utama

### Customer Features
✅ Homepage dengan hero banner  
✅ Katalog produk dengan filter kategori dan search realtime  
✅ Detail produk dengan galeri gambar & zoom  
✅ Keranjang belanja dengan update quantity  
✅ Checkout dengan alamat pengiriman dan pilihan kurir  
✅ Multiple payment methods (QRIS, DANA, OVO, GoPay, Midtrans)  
✅ Profile pelanggan & riwayat pesanan  
✅ Wishlist  
✅ Sistem rating & review  
✅ Responsive design (Mobile & Desktop)  

### Admin Dashboard
✅ Dashboard dengan statistik  
✅ CRUD Produk lengkap  
✅ CRUD Kategori  
✅ CRUD Promo/Voucher  
✅ Kelola Pesanan & Status  
✅ Kelola Pelanggan  
✅ Kelola Review  
✅ Admin authentication  

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15 + React 18
- TypeScript
- Tailwind CSS
- Responsive Mobile-First

**Backend:**
- Node.js + Express.js
- TypeScript
- JWT Authentication
- bcryptjs Password Hashing

**Database:**
- MySQL 8.0+
- Complete schema dengan foreign keys

**Image Storage:**
- Cloudinary (optional, or Unsplash API)

## 📦 Struktur Project

```
naichii-bakery/
├── frontend/                 # Next.js application
│   ├── app/                 # App directory
│   │   ├── (customer)/      # Customer pages
│   │   ├── admin/           # Admin dashboard
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/          # Reusable components
│   ├── lib/                 # Utilities & types
│   ├── public/              # Static assets
│   └── package.json
│
├── backend/                 # Express.js API
│   ├── src/
│   │   ├── routes/          # API endpoints
│   │   ├── middleware/      # Auth middleware
│   │   ├── db.ts            # Database connection
│   │   └── index.ts         # Main server
│   ├── schema.sql           # Database schema
│   ├── seed.sql             # Initial data
│   ├── seed_full.sql        # 48+ products seed
│   └── package.json
│
└── BUSINESS_BLUEPRINT.md    # Business documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js v18+
- npm v10+
- MySQL 8.0+

### 1. Clone Repository
```bash
cd /workspaces/naichii-bakery
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run build
```

### 3. Backend Setup
```bash
cd backend
npm install
npm run build

# Create .env file
cp .env.example .env
# Edit .env with your MySQL credentials
```

### 4. Database Setup
```bash
# Option 1: Using MySQL CLI
mysql -u root -p < schema.sql
mysql -u root -p < seed_full.sql

# Option 2: Using MySQL Workbench
# Import both SQL files
```

### 5. Environment Variables

**Backend (.env)**
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=naichii_bakery
JWT_SECRET=your_jwt_secret_key
PORT=4000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Frontend (.env.local)** - if needed
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## 🏃 Running Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server runs on http://localhost:4000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Application runs on http://localhost:3000
```

### Production Build
```bash
# Backend
cd backend && npm run build
npm start

# Frontend
cd frontend && npm run build
npm start
```

## 📊 Database Schema

### Tables
- `admins` - Admin accounts
- `users` - Customer & admin users
- `categories` - Product categories
- `products` - Product listings
- `product_images` - Product gallery
- `product_variants` - Product variants/options
- `carts` - Shopping carts
- `orders` - Customer orders
- `order_items` - Order line items
- `payments` - Payment transactions
- `reviews` - Product reviews
- `promotions` - Discounts & vouchers
- `wishlists` - Saved products

All tables have proper foreign keys and relationships.

## 🔐 Default Admin Account

```
Email: admin@naichii.com
Password: Admin123@
```

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register customer
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products with images
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Admin Routes
- `GET /api/admin/categories` - List categories
- `POST /api/admin/categories` - Create category
- `GET /api/admin/orders` - List orders
- `PUT /api/admin/orders/:id` - Update order status
- `GET /api/admin/customers` - List customers
- `GET /api/admin/promotions` - List promotions
- `POST /api/admin/promotions` - Create promotion
- `GET /api/admin/reviews` - List reviews
- `PUT /api/admin/reviews/:id` - Approve/reject review

### Statistics
- `GET /api/stats` - Dashboard statistics

## 📝 Pages

### Customer
- `/` - Homepage
- `/products` - Product catalog with filters
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/login` - Login form
- `/register` - Registration form
- `/profile` - Customer profile & orders

### Admin
- `/admin/login` - Admin login
- `/admin/dashboard` - Dashboard with stats
- `/admin/products` - Product management
- `/admin/categories` - Category management
- `/admin/orders` - Order management
- `/admin/customers` - Customer list
- `/admin/promotions` - Promotion management
- `/admin/reviews` - Review management

## 🎨 Design

### Colors
- Primary: `#D97706` (Orange)
- Secondary: `#FFF7ED` (Light Orange)
- Accent: `#F59E0B` (Yellow Orange)
- Background: `#FFFBF5` (Off White)
- Text: `#3F3F46` (Dark Gray)

## 📦 Data

**48+ Bakery Products** with categories:
- 7 Croissant variants
- 8 Pastry/Danish variants
- 8 Roti Manis variants
- 8 Donat variants
- 8 Cake variants
- 8 Cookies variants
- 1 Paket Sarapan

Setiap produk memiliki:
- 3+ gambar berkualitas tinggi
- Deskripsi lengkap
- Rating & review
- Variants/options

## 🔒 Security

- JWT token authentication
- Password hashing dengan bcryptjs
- Admin middleware verification
- CORS protection
- Input validation

## 📈 Deployment

### Heroku
```bash
git push heroku main
heroku config:set DB_HOST=... DB_USER=... DB_PASSWORD=...
```

### Vercel (Frontend)
```bash
npm install -g vercel
vercel
```

### Cloud Hosting (Backend)
Deploy ke Railway, Render, AWS, atau hosting lainnya dengan environment variables yang sesuai.

## 🐛 Troubleshooting

**MySQL Connection Error**
```bash
# Pastikan MySQL running
# Cek connection di backend/.env
# Test: mysql -u root -p -e "SELECT 1"
```

**Port Already in Use**
```bash
# Change PORT in backend/.env
# Frontend: npm run dev -- -p 3001
```

**Build Error**
```bash
# Clear cache
rm -rf .next dist node_modules
npm install
npm run build
```

## 📞 Support

Untuk bantuan atau pertanyaan, hubungi team development.

---

**Made with ❤️ for Bakery Naichii**
