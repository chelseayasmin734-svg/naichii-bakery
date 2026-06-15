import { Router } from 'express';
import pool from '../db';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();

// Create product (Admin only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, category_id, price, stock, description } = req.body;

  try {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    await pool.query('INSERT INTO products (category_id, name, slug, price, stock, description) VALUES (?, ?, ?, ?, ?, ?)', [
      category_id,
      name,
      slug,
      price,
      stock,
      description
    ]);

    res.status(201).json({ message: 'Produk berhasil ditambahkan' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menambahkan produk' });
  }
});

// Get all products with images
router.get('/', async (_req, res) => {
  try {
    const [products] = await pool.query(`
      SELECT p.*, c.name as category,
      JSON_ARRAYAGG(pi.image_url) as images
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      LEFT JOIN product_images pi ON p.id = pi.product_id
      GROUP BY p.id
      ORDER BY p.id DESC
    `);

    const formatted = (products as any).map((p: any) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      category: p.category || 'Uncategorized',
      price: p.price,
      rating: p.rating,
      reviews: p.reviews,
      stock: p.stock,
      description: p.description,
      images: p.images ? p.images.filter((img: any) => img !== null) : []
    }));

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat produk' });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const [products] = await pool.query(
      `SELECT p.*, c.name as category,
       JSON_ARRAYAGG(pi.image_url) as images
       FROM products p
       LEFT JOIN categories c ON p.category_id = c.id
       LEFT JOIN product_images pi ON p.id = pi.product_id
       WHERE p.id = ? OR p.slug = ?
       GROUP BY p.id`,
      [req.params.id, req.params.id]
    );

    if ((products as any).length === 0) {
      return res.status(404).json({ error: 'Produk tidak ditemukan' });
    }

    const p = (products as any)[0];
    res.json({
      id: p.id,
      name: p.name,
      slug: p.slug,
      category: p.category,
      price: p.price,
      rating: p.rating,
      reviews: p.reviews,
      stock: p.stock,
      description: p.description,
      images: p.images ? p.images.filter((img: any) => img !== null) : []
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat produk' });
  }
});

// Update product (Admin only)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, category_id, price, stock, description } = req.body;

  try {
    await pool.query('UPDATE products SET category_id=?, name=?, price=?, stock=?, description=? WHERE id=?', [
      category_id,
      name,
      price,
      stock,
      description,
      req.params.id
    ]);

    res.json({ message: 'Produk berhasil diperbarui' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memperbarui produk' });
  }
});

// Delete product (Admin only)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await pool.query('DELETE FROM products WHERE id=?', [req.params.id]);
    res.json({ message: 'Produk berhasil dihapus' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menghapus produk' });
  }
});

export default router;
