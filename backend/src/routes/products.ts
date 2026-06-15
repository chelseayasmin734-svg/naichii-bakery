import { Router } from 'express';
import pool from '../db';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const [products] = await pool.query('SELECT * FROM products');
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat produk' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const [products] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if ((products as any).length === 0) return res.status(404).json({ error: 'Produk tidak ditemukan' });
    res.json((products as any)[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat produk' });
  }
});

export default router;
