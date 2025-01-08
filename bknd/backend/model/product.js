
import mongoose, { Types } from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productNumber: {
    type: Number,
    required: true
  },
  bookedAt: {
    type: Date,
    default: Date.now
  }
});

const bookingModule = mongoose.model("product", bookingSchema); 
export default bookingModule; 
