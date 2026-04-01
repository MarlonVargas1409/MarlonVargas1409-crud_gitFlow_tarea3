const { Router } = require('express');
const { 
    createProduct, 
    getProducts, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController');
const router = Router();
router.post('/', createProduct);
router.get('/', getProducts);
router.put('/:id', updateProduct);    // Actualizar por ID
router.delete('/:id', deleteProduct); // Eliminar por ID
module.exports = router;