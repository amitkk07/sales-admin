const express = require('express');
const wholesalerRoutes = require('./routes/wholesalerRoutes');
const retailerRoutes = require('./routes/retailerRoutes');
const stockRoutes = require('./routes/stockRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());
app.use('/wholesalers', wholesalerRoutes);
app.use('/retailer', retailerRoutes);
app.use('/stock', stockRoutes);

app.use(errorHandler);

module.exports = app;