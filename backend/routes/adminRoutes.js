// routes/adminRoutes.js
import express from 'express';
import {
  getAllServices,
  upsertServicePrice,
  getAllCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon
} from '../controllers/adminController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// 🧾 Coupon Routes
router.get('/coupons', protect, isAdmin, getAllCoupons);
router.post('/coupon', protect, isAdmin, createCoupon);
router.put('/coupon/:id', protect, isAdmin, updateCoupon);
router.delete('/coupon/:id', protect, isAdmin, deleteCoupon);

// 💰 Service Price Routes
router.get('/services', protect, isAdmin, getAllServices);
router.post('/service', protect, isAdmin, upsertServicePrice); // for both add and update

export default router;
