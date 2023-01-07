const mongoose = require('mongoose');

const PrestamosSchema = mongoose.Schema({
    fecha: {
        type: String,
        required: true
    },
    folio: {
        type: String,
        required: true
    },
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
    },
    fechapago: {
        type: String,
        required: true
    },
    totalapagar: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Prestamos', PrestamosSchema);