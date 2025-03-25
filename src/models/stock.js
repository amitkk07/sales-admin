module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Stock", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    wholesaler_id: { type: DataTypes.INTEGER, allowNull: false },
    retailer_id: { type: DataTypes.INTEGER, allowNull: false },
    stock_amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false }
  });
};
