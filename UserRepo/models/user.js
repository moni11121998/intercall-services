const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  role: String,
});

module.exports = mongoose.model('User', userSchema);
