const Product = require('../../infrastructure/models/Product');
const createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ ok: true, product });
};
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json({ ok: true, products });
};
// ACTUALIZAR PRODUCTO (U)
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ ok: false, msg: 'No encontrado' });
        
        res.json({ ok: true, product: updatedProduct });
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error al actualizar' });
    }
};

// ELIMINAR PRODUCTO (D)
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ ok: false, msg: 'No encontrado' });

        res.json({ ok: true, msg: 'Producto eliminado del inventario' });
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Error al eliminar' });
    }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
