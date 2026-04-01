const { Router } = require('express');
const { createProduct } = require('../controllers/productController');
const router = Router();
router.post('/', createProduct);
module.exports = router;