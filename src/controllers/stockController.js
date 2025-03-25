const stockService = require('../services/stockService');

exports.createStock = async (req, res) => {
  try {
    const { wholesaler_id, retailer_id, stock_amount, date } = req.body;
    
    if (!wholesaler_id || !retailer_id || !stock_amount || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const stockEntry = await stockService.createStockEntry(wholesaler_id, retailer_id, stock_amount, date);
    res.status(201).json(stockEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStockDataFor2021 = async (req, res) => {
  try {
    const stockData = await stockService.getStockDataFor2021();
    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
