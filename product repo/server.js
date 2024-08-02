const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cronService = require('./services/cronService'); 
const userService =require('./services/userService')

const app = express();

connectDB();

app.use('/products', productRoutes);

app.listen(3001, () => {
    console.log(`Product Service running on port ${3001}`);
  });
