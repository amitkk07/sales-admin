const { Stock } = require('../models');
const { Op } = require('sequelize');

exports.createStockEntry = async (wholesalerId, retailerId, stockAmount, date) => {
  return await Stock.create({
    wholesaler_id: wholesalerId,
    retailer_id: retailerId,
    stock_amount: stockAmount,
    date
  });
};

exports.getStockDataFor2021 = async () => {
  return await Stock.findAll({
    where: {
      date: {
        [Op.between]: ['2021-01-01', '2021-12-31']
      }
    }
  });
};
