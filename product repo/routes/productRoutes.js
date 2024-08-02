const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/handle-low-availability', async (req, res) => {
  try {
    await productController.handleLowAvailabilityProducts();
    res.status(200).send('Product operation Completed Successfully');
  } catch (error) {
    res.status(500).send('Error occurred while handling low availability products');
  }
});

module.exports = router;

