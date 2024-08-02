const cron = require('node-cron');
const productController = require('../controller/productController');

cron.schedule('0 22 * * *', async () => { 
  try {
    await productController.handleLowAvailabilityProducts();
  } catch (error) {
    console.error('Error occurred during scheduled task:', error);
  }
});

