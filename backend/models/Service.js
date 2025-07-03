// models/Service.js
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true }, // e.g. "workplace"
  price: { type: Number, required: true }
});

export default mongoose.model('Service', serviceSchema);
