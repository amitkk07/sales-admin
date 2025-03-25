const express = require('express');
const router = express.Router();
const wholesalerController = require('../controllers/wholesalerController');

router.post('/add', wholesalerController.addWholesaler);
router.get('/all/data', wholesalerController.getAllWholesalers);
router.get("/:id", wholesalerController.getWholesalerWithAssociatedRetailers);
router.get("/monthly/turnover", wholesalerController.getMonthlyTurnover);
router.get("/max/turnover", wholesalerController.getMaxTurnover);

module.exports = router;