const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.post('/purchase', stockController.createStock); // Create a stock transaction
router.get('/2021/data', stockController.getStockDataFor2021); // Get stock data from 2021

module.exports = router;
