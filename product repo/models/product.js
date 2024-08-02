const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  availability: Number,
});

module.exports = mongoose.model('Product', productSchema);
