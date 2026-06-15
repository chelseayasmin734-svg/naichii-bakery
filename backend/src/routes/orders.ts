import { Router } from 'express';
import pool from '../db';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const [orders] = await pool.query('SELECT * FROM orders');
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat pesanan' });
  }
});

export default router;
