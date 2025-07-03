import Order from '../models/Order.js';
import Coupon from '../models/Coupon.js';

const servicePrices = {
    workplace: 100,
    party: 200,
    everyday: 50,
    // add more service types and prices as needed
  };
  
export const createOrder = async (req, res) => {
    const { serviceType, quantity, address, couponCode } = req.body;
  
    const unitPrice = servicePrices[serviceType];
    if (!unitPrice) {
      return res.status(400).json({ error: 'Invalid service type' });
    }
  
    const basePrice = unitPrice * parseInt(quantity);
    let discount = 0;
  
    if (couponCode) {
      const coupon = await Coupon.findOne({ code: couponCode });
      if (coupon) {
        discount = coupon.discount || 0;
      }
    }
  
    const finalPrice = basePrice - discount;
  
    const order = await Order.create({
      userId: req.user._id,
      serviceType,
      quantity,
      address,
      price: finalPrice,
      coupon: couponCode,
      discount,
    });
  
    res.json(order);
  };
  

export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  res.json(orders);
};
