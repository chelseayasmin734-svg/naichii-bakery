import { Router } from 'express';
import pool from '../db';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();

// Admin Products CRUD
router.post('/products', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, category_id, price, stock, description } = req.body;

  try {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    const [result] = await pool.query('INSERT INTO products (category_id, name, slug, price, stock, description) VALUES (?, ?, ?, ?, ?, ?)', [
      category_id,
      name,
      slug,
      price,
      stock,
      description
    ]);

    res.status(201).json({ id: (result as any).insertId, message: 'Produk berhasil ditambahkan' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menambahkan produk' });
  }
});

// Admin Categories CRUD
router.get('/categories', authMiddleware, adminMiddleware, async (_req, res) => {
  try {
    const [categories] = await pool.query('SELECT * FROM categories');
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat kategori' });
  }
});

router.post('/categories', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, description } = req.body;

  try {
    await pool.query('INSERT INTO categories (name, description) VALUES (?, ?)', [name, description]);
    res.status(201).json({ message: 'Kategori berhasil ditambahkan' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menambahkan kategori' });
  }
});

// Admin Orders CRUD
router.get('/orders', authMiddleware, adminMiddleware, async (_req, res) => {
  try {
    const [orders] = await pool.query(`
      SELECT o.*, u.name, u.email, 
      (SELECT SUM(total_price) FROM order_items WHERE order_id = o.id) as total
      FROM orders o
      LEFT JOIN users u ON o.user_id = u.id
      ORDER BY o.id DESC
    `);
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat pesanan' });
  }
});

router.put('/orders/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { status } = req.body;

  try {
    await pool.query('UPDATE orders SET status = ? WHERE id = ?', [status, req.params.id]);
    res.json({ message: 'Status pesanan berhasil diperbarui' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memperbarui pesanan' });
  }
});

// Admin Customers
router.get('/customers', authMiddleware, adminMiddleware, async (_req, res) => {
  try {
    const [customers] = await pool.query(`
      SELECT u.id, u.name, u.email, u.phone,
      COUNT(o.id) as total_orders,
      IFNULL(SUM(o.total_amount), 0) as total_spent
      FROM users u
      LEFT JOIN orders o ON u.id = o.user_id
      WHERE u.role = 'customer'
      GROUP BY u.id
    `);
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat pelanggan' });
  }
});

// Admin Promotions CRUD
router.get('/promotions', authMiddleware, adminMiddleware, async (_req, res) => {
  try {
    const [promotions] = await pool.query('SELECT * FROM promotions ORDER BY id DESC');
    res.json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat promo' });
  }
});

router.post('/promotions', authMiddleware, adminMiddleware, async (req, res) => {
  const { title, code, discount_percentage, free_shipping, starts_at, ends_at } = req.body;

  try {
    await pool.query(
      'INSERT INTO promotions (title, code, discount_percentage, free_shipping, starts_at, ends_at) VALUES (?, ?, ?, ?, ?, ?)',
      [title, code, discount_percentage, free_shipping, starts_at, ends_at]
    );
    res.status(201).json({ message: 'Promo berhasil ditambahkan' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menambahkan promo' });
  }
});

// Admin Reviews
router.get('/reviews', authMiddleware, adminMiddleware, async (_req, res) => {
  try {
    const [reviews] = await pool.query(`
      SELECT r.*, p.name, u.name as user_name
      FROM reviews r
      LEFT JOIN products p ON r.product_id = p.id
      LEFT JOIN users u ON r.user_id = u.id
      ORDER BY r.id DESC
    `);
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat review' });
  }
});

router.put('/reviews/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { approved } = req.body;

  try {
    await pool.query('UPDATE reviews SET approved = ? WHERE id = ?', [approved, req.params.id]);
    res.json({ message: 'Review berhasil diperbarui' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memperbarui review' });
  }
});

export default router;
