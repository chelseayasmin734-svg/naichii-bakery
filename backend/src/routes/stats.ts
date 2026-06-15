import { Router } from 'express';
import pool from '../db';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const [totals] = await pool.query(`
      SELECT
        (SELECT COUNT(*) FROM products) AS total_products,
        (SELECT COUNT(*) FROM orders) AS total_orders,
        (SELECT COUNT(*) FROM users WHERE role = 'customer') AS total_customers,
        (SELECT IFNULL(SUM(total_amount), 0) FROM orders) AS total_revenue
    `);
    res.json((totals as any)[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal memuat statistik' });
  }
});

export default router;
