const { Wholesaler } = require('../models');
const { Retailer } = require('../models');
const { Stock } = require('../models');
const { sequelize } = require('../models');

const createWholesaler = async (data) => {
    try {
        const wholesaler = await Wholesaler.create(data);
        return { success: true, wholesaler };
    } catch (error) {
        return { success: false, message: error.message };
    }
};


const getAllWholesalers = async () => {
    try {
      const wholesalers = await Wholesaler.findAll(); 
      return { success: true, wholesalers };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };


  const getWholesalerWithAssociatedRetailers = async (id) => {
    return await Wholesaler.findByPk(id, {
      include: {
        model: Retailer,
        through: { attributes: [] }, // Exclude Stock table data
      },
    });
  };



  const getMonthlyTurnover = async () => {
    return await Stock.findAll({
      attributes: [
        "wholesaler_id",
        [sequelize.literal('EXTRACT(YEAR FROM "date")'), "year"], 
        [sequelize.literal('EXTRACT(MONTH FROM "date")'), "month"], 
        [sequelize.fn("SUM", sequelize.col("stock_amount")), "total_turnover"],
        [sequelize.col("Wholesaler.name"), "wholesaler_name"], 
      ],
      include: [
        {
          model: Wholesaler,
          attributes: [], 
        },
      ],
      group: ["wholesaler_id", "year", "month", "Wholesaler.name"],
      raw: true,
    });
  };
  
  const getMaxTurnover = async () => {
    return await Stock.findAll({
      attributes: [
        "wholesaler_id",
        "retailer_id",
        [sequelize.fn("MAX", sequelize.col("stock_amount")), "max_turnover"],
        [sequelize.col("Wholesaler.name"), "wholesaler_name"],
        [sequelize.col("Retailer.name"), "retailer_name"], 
      ],
      include: [
        {
          model: Wholesaler,
          attributes: [], 
        },
        {
          model: Retailer,
          attributes: [], 
        },
      ],
      group: ["wholesaler_id", "retailer_id", "Wholesaler.name", "Retailer.name"],
      raw: true,
    });
  };


module.exports = { 
    createWholesaler,
    getAllWholesalers,
    getWholesalerWithAssociatedRetailers,
    getMonthlyTurnover,
    getMaxTurnover
};
