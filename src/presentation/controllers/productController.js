const Product = require('../../infrastructure/models/Product');
const createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ ok: true, product });
};
module.exports = { createProduct };