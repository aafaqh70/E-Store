const mongoose = require('mongoose');


const categories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: categories, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
