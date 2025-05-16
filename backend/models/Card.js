const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  country: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String },
  visaCount: { type: String },
  date: { type: String },
  category: { type: String },
  includesTruckIcon: { type: Boolean },
  stickerVisa: { type: Boolean },
  statusText: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Card', CardSchema); 