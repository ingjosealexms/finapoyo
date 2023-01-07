const mongoose = require('mongoose');

const ClientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    colonia: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    cobranza: {
        type: String,
        required: true
    },
    cantidadprestamo: {
        type: String,
        required: true
    },
    pagodiario: {
        type: String,
        required: true
    },
    plazoprestamo: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Clientes', ClientesSchema);