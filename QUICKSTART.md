# 🥐 Bakery Naichii - Quick Start Guide

## Sekilas Proyek

**Bakery Naichii** adalah platform e-commerce lengkap untuk toko roti dan pastry premium dengan desain modern seperti Shopee dan Tokopedia.

- ✅ **48+ Produk Bakery** dengan gambar berkualitas
- ✅ **Frontend Modern** dengan Next.js + Tailwind
- ✅ **Backend Robust** dengan Express.js API
- ✅ **Admin Dashboard** lengkap untuk manajemen
- ✅ **Database MySQL** dengan 13 tabel terintegrasi

## ⚡ Quick Start (5 Menit)

### 1. Database Setup
```bash
# Buat database
mysql -u root -p < backend/schema.sql
mysql -u root -p < backend/seed_full.sql

# Atau import files melalui MySQL Workbench
```

### 2. Backend Start
```bash
cd backend

# Setup environment
cp .env.example .env
# Edit .env dengan MySQL credentials

# Install & run
npm install
npm run dev

# ✅ Backend running on http://localhost:4000
```

### 3. Frontend Start (Terminal baru)
```bash
cd frontend
npm install
npm run dev

# ✅ Frontend running on http://localhost:3000
```

## 🔑 Demo Credentials

**Admin Account:**
- Email: `admin@naichii.com`
- Password: `Admin123@`
- URL: http://localhost:3000/admin/login

**Customer Account:**
- Email: `customer@naichii.com`
- Password: `Admin123@`
- URL: http://localhost:3000/login

## 📖 Pages & Routes

### Customer Pages
| Route | Feature |
|-------|---------|
| `/` | Homepage with hero banner |
| `/products` | Product catalog with filters |
| `/cart` | Shopping cart |
| `/checkout` | Checkout process |
| `/login` | Customer login |
| `/register` | Registration |
| `/profile` | Profile & order history |

### Admin Pages
| Route | Feature |
|-------|---------|
| `/admin/login` | Admin login |
| `/admin/dashboard` | Dashboard & stats |
| `/admin/products` | Kelola produk |
| `/admin/categories` | Kelola kategori |
| `/admin/orders` | Kelola pesanan |
| `/admin/customers` | Daftar pelanggan |
| `/admin/promotions` | Kelola promo |
| `/admin/reviews` | Kelola review |

## 🗂️ Project Structure

```
naichii-bakery/
├── frontend/          # Next.js + React + Tailwind
│   ├── app/          # Pages & layouts
│   ├── components/   # Reusable components
│   ├── lib/          # Types & utilities
│   └── public/       # Static files
│
├── backend/          # Express.js + Node.js
│   ├── src/
│   │   ├── routes/   # API endpoints
│   │   ├── middleware/# Auth middleware
│   │   └── index.ts  # Server entry
│   ├── schema.sql    # Database schema
│   ├── seed.sql      # Basic seed data
│   └── seed_full.sql # 48+ products
│
├── SETUP_GUIDE.md    # Detailed setup
└── README.md         # Main documentation
```

## 🍞 Database Products (48+)

### Croissant (7)
- Croissant Butter Premium
- Chocolate Croissant
- Almond Croissant
- Pistachio Croissant
- Hazelnut Croissant
- Cheese Croissant
- Spinach & Feta Croissant

### Pastry/Danish (8)
- Strawberry Danish
- Cheese Danish
- Apple Cinnamon Danish
- Blueberry Danish
- Peach Danish
- Raspberry Danish
- Honey Walnut Danish
- Fig & Ricotta Danish

### Roti Manis (8)
- Cinnamon Roll
- Roti Sosis
- Roti Abon
- Roti Manis Coklat
- Roti Manis Keju
- Bolu Pandan
- Roti Manis Tuna Mayo
- Roti Manis Coklat Chip

### Donat (8)
- Donat Coklat
- Donat Strawberry
- Donat Glazed
- Donat Matcha
- Donat Blueberry Cheese
- Donat Vanilla Custard
- Donat Rainbow Sprinkles
- Donat Nutella

### Cake (8)
- Red Velvet Cake
- Black Forest Cake
- Chocolate Lava Cake
- Strawberry Cheesecake
- Tiramisu Cake
- Vanilla Sponge Cake
- Matcha Green Tea Cake
- Carrot Cake with Cream Cheese

### Cookies (8)
- Choco Cookies
- Butter Cookies
- Oatmeal Raisin Cookies
- Macadamia Nut Cookies
- Peanut Butter Cookies
- White Choco Macadamia
- Lemon Sugar Cookies
- Double Chocolate Chunk

### Special (1)
- Paket Sarapan Lengkap

## 🎨 Design System

**Color Palette:**
- Primary: `#D97706` (Orange)
- Secondary: `#FFF7ED` (Light)
- Accent: `#F59E0B` (Gold)
- Background: `#FFFBF5` (Off-white)
- Text: `#3F3F46` (Dark)

**Responsive:** Mobile-first design (xs, sm, md, lg, xl)

## 📡 API Documentation

### Authentication
```bash
POST /api/auth/login
POST /api/auth/register
```

### Products
```bash
GET /api/products                    # List all
GET /api/products/:id                # Get one
POST /api/products (Admin)           # Create
PUT /api/products/:id (Admin)        # Update
DELETE /api/products/:id (Admin)     # Delete
```

### Admin CRUD
```bash
GET /api/admin/categories
POST /api/admin/categories
GET /api/admin/orders
PUT /api/admin/orders/:id
GET /api/admin/customers
GET /api/admin/promotions
POST /api/admin/promotions
GET /api/admin/reviews
PUT /api/admin/reviews/:id
```

### Statistics
```bash
GET /api/stats                       # Dashboard stats
```

## 🛡️ Security Features

✅ JWT Authentication  
✅ Password Hashing (bcryptjs)  
✅ Admin Middleware Verification  
✅ CORS Protection  
✅ Input Validation  
✅ Role-based access control  

## 🚀 Deployment

### Option 1: Vercel + Railway
```bash
# Frontend: Deploy ke Vercel
vercel

# Backend: Deploy ke Railway
# Set environment variables
```

### Option 2: Heroku
```bash
heroku create bakery-naichii
git push heroku main
heroku config:set DB_HOST=... DB_USER=... DB_PASSWORD=...
```

### Option 3: VPS/Self-hosted
- Backend: PM2 + Nginx reverse proxy
- Frontend: Next.js standalone
- Database: MySQL managed service

## 🔧 Common Issues

**Problem:** MySQL connection failed
```bash
Solution:
1. Pastikan MySQL running: sudo systemctl start mysql
2. Verify credentials di .env
3. Test: mysql -u root -p -e "SELECT 1"
```

**Problem:** Port 3000 atau 4000 sudah terpakai
```bash
Solution:
# Ubah port di .env atau command
npm run dev -- -p 3001
```

**Problem:** Build error
```bash
Solution:
npm run build -- --no-cache
rm -rf .next node_modules
npm install
```

## 📚 Documentation Files

- `SETUP_GUIDE.md` - Detailed setup & installation
- `BUSINESS_BLUEPRINT.md` - Business documentation
- API docs in code comments

## 🎯 Next Steps

1. ✅ Setup & run locally
2. ✅ Test customer flow (browse → cart → checkout)
3. ✅ Test admin dashboard (login → manage products)
4. ✅ Customize colors & branding
5. ✅ Setup payment gateway (Midtrans)
6. ✅ Deploy to production

## 🤝 Support

Untuk bantuan teknis atau pertanyaan, lihat SETUP_GUIDE.md atau hubungi team development.

---

**Ready to launch! Happy selling! 🎉**
