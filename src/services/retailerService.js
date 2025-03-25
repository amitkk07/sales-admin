const { Retailer } = require('../models');
const { Wholesaler } = require('../models');
const { sequelize } = require('../models');

const createRetailer = async (data) => {
    try {
        const retailer = await Retailer.create(data);
        return { success: true, retailer };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const getAllRetailers = async () => {
  try {
    const retailers = await Retailer.findAll(); // Use Sequelize ORM instead of raw query
    return { success: true, retailers };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const getRetailersWithSingleWholesaler = async () => {
  const retailers = await Retailer.findAll({
    include: [
      {
        model: Wholesaler,
        through: { attributes: [] },
      },
    ],
  });

  return retailers.filter((retailer) => retailer.Wholesalers.length === 1);
};




module.exports = { 
    createRetailer,
    getAllRetailers,
    getRetailersWithSingleWholesaler
};
