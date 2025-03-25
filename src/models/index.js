const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const WholesalerModel = require("./wholesaler");
const RetailerModel = require("./retailer");
const StockModel = require("./stock");

const db = {
  Sequelize,
  sequelize,
  Wholesaler: WholesalerModel(sequelize, Sequelize),
  Retailer: RetailerModel(sequelize, Sequelize),
  Stock: StockModel(sequelize, Sequelize),
};

// Define Many-to-Many Relationship using Stock as the Join Table
db.Wholesaler.belongsToMany(db.Retailer, {
  through: db.Stock,
  foreignKey: "wholesaler_id",
  otherKey: "retailer_id",
});

db.Retailer.belongsToMany(db.Wholesaler, {
  through: db.Stock,
  foreignKey: "retailer_id",
  otherKey: "wholesaler_id",
});

// Ensure Stock table correctly links to Wholesaler and Retailer
db.Stock.belongsTo(db.Wholesaler, { foreignKey: "wholesaler_id",
   //onDelete: "CASCADE", onUpdate: "CASCADE"
   });
db.Stock.belongsTo(db.Retailer, { foreignKey: "retailer_id", 
 // onDelete: "CASCADE", onUpdate: "CASCADE"
 });

module.exports = db;
