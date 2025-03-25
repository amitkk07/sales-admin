const wholesalerService = require('../services/wholesalerService');

const addWholesaler = async (req, res) => {
    try {
        const { name, mobile_number } = req.body;

        if (!name || !mobile_number) {
            return res.status(400).json({ success: false, message: 'Name and email are required' });
        }
        const response = await wholesalerService.createWholesaler({ name, mobile_number });
        if (response.success) {
            return res.status(201).json({ success: true, data: response.wholesaler });
        } else {
            return res.status(400).json({ success: false, message: response.message });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const getAllWholesalers = async (req, res) => {
    try {
        const response = await wholesalerService.getAllWholesalers();

        if (response.success) {
            return res.status(200).json({ success: true, data: response.wholesalers });
        } else {
            return res.status(400).json({ success: false, message: response.message });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const getWholesalerWithAssociatedRetailers = async (req, res) => {
    try {
      const { id } = req.params;
      const wholesaler = await wholesalerService.getWholesalerWithAssociatedRetailers(id);
  
      if (!wholesaler) return res.status(404).json({ error: "Wholesaler not found" });
  
      res.json(wholesaler);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
const getMonthlyTurnover = async (req, res) => {
    try {
      const turnoverData = await wholesalerService.getMonthlyTurnover();
      res.json(turnoverData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getMaxTurnover = async (req, res) => {
    try {
      const maxTurnoverData = await wholesalerService.getMaxTurnover();
      res.json(maxTurnoverData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
module.exports = { 
    addWholesaler, 
    getAllWholesalers,
    getWholesalerWithAssociatedRetailers,
    getMonthlyTurnover,
    getMaxTurnover
};
