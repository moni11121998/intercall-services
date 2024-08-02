const Product = require('../models/product');
const { sendLowStockEmail } = require('../services/emailService'); 
const {createExcelFile } = require('../services/excelService');
const {fetchAdminEmails} = require('../services/userService');

exports.handleLowAvailabilityProducts = async () => {
  try {
    console.log('Fetching products with availability less than 10...');
    const products = await Product.find({ availability: { $lt: 10 } }).exec();
    
    if (products.length > 0) {
     console.log('Low availability products found:', products);
    
      const buffer = await createExcelFile(products); 
      const adminEmails = await fetchAdminEmails(); 
      await sendLowStockEmail(adminEmails, buffer);
      console.log('Email sent successfully');
    } else {
      console.log('No low availability products found.');
    }
  } catch (error) {
    console.error('Error handling low availability products:', error);
    throw error;
  }
};

