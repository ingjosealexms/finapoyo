const mongoose = require('mongoose');

const AlmacenSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    codigobarras: {
        type: String,
        required: true
    },
    precioventa: {
        type: String,
        required: true
    },
    preciocompra: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    fechacaducidad: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Almacen', AlmacenSchema);