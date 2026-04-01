const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true }, // Ej: Lácteos, Cárnicos
    precio: { type: Number, required: true },
    stock: { type: Number, default: 0 }
});
module.exports = mongoose.model('Product', productSchema);