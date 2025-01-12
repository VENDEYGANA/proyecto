const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    productoId: Number,
    cantidad: Number,
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Venta', ventaSchema);