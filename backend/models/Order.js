import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  serviceType: String, // workplace, party, everyday
  quantity: Number,
  address: String,
  price: Number,
  coupon: String,
  discount: Number,
  paymentId: String,
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
