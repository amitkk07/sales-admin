const express = require('express');
const router = express.Router();
const retailerController = require('../controllers/retailerController');

router.post('/add', retailerController.addRetailer);
router.get('/all/data', retailerController.getAllRetailers);
router.get("/single-wholesaler", retailerController.getRetailersWithSingleWholesaler);


module.exports = router;