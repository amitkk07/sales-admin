require('dotenv').config(); // Ensure env variables are loaded first
const app = require('./src/app');
const db = require('./src/models');

const PORT = process.env.PORT || 3000;

db.sequelize
  .sync({ alter: true }) // Use alter instead of force to avoid data loss
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Error syncing database:', err);
    process.exit(1); // Exit the process if DB connection fails
  });
