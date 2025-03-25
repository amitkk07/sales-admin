const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Needed for some cloud-hosted PostgreSQL services
    },
  },
});

sequelize.authenticate()
  .then(() => console.log('Wholesaler Database connected...'))
  .catch(err => console.error('Error:', err));

module.exports = sequelize;
