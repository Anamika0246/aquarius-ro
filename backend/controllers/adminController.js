import Service from '../models/Service.js';
import Coupon from '../models/Coupon.js';

// 📦 Get all service prices
export const getAllServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

// ➕ Add or update a service price
export const upsertServicePrice = async (req, res) => {
  const { type, price } = req.body;

  if (!type || typeof price !== 'number') {
    return res.status(400).json({ message: 'Type and price are required' });
  }

  try {
    const service = await Service.findOneAndUpdate(
      { type },
      { price },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🧾 Get all coupons
export const getAllCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
};

// ➕ Create a coupon
export const createCoupon = async (req, res) => {
  const { code, discount } = req.body;

  if (!code || typeof discount !== 'number') {
    return res.status(400).json({ message: 'Code and discount are required' });
  }

  try {
    const newCoupon = await Coupon.create({ code, discount });
    res.status(201).json(newCoupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔁 Update a coupon
export const updateCoupon = async (req, res) => {
  const { id } = req.params;
  const { discount } = req.body;

  try {
    const coupon = await Coupon.findById(id);
    if (!coupon) return res.status(404).json({ message: 'Coupon not found' });

    coupon.discount = discount;
    await coupon.save();

    res.json(coupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ❌ Delete a coupon
export const deleteCoupon = async (req, res) => {
  const { id } = req.params;

  try {
    const coupon = await Coupon.findById(id);
    if (!coupon) return res.status(404).json({ message: 'Coupon not found' });

    await coupon.remove();
    res.json({ message: 'Coupon deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
