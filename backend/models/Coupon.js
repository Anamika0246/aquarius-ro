import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  discount: Number // flat discount
});

export default mongoose.model('Coupon', couponSchema);
