const retailerService = require('../services/retailerService');

const addRetailer = async (req, res) => {
    try {
        const { name, mobile_number } = req.body;

        if (!name || !mobile_number) {
            return res.status(400).json({ success: false, message: 'Name and mobile_number are required' });
        }
        const response = await retailerService.createRetailer({ name, mobile_number });
        if (response.success) {
            return res.status(201).json({ success: true, data: response.retailer });
        } else {
            return res.status(400).json({ success: false, message: response.message });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const getAllRetailers = async (req, res) => {
    try {
        const response = await retailerService.getAllRetailers();

        if (response.success) {
            return res.status(200).json({ success: true, data: response.retailers });
        } else {
            return res.status(400).json({ success: false, message: response.message });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const getRetailersWithSingleWholesaler = async (req, res) => {
    try {
      const filteredRetailers = await retailerService.getRetailersWithSingleWholesaler();
      res.json(filteredRetailers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


module.exports = { 
    addRetailer, 
    getAllRetailers,
    getRetailersWithSingleWholesaler
};
