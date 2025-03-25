module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Retailer", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    mobile_number: { type: DataTypes.STRING, unique: true, allowNull: false }
  });
};
