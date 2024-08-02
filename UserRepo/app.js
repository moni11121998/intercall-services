require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use('/users', userRoutes);


app.listen(3002, () => {
    console.log(`User service running on port ${3002}`);
  });