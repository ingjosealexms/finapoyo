const mongoose = require('mongoose');

const MisdocumentosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    proyectoid: {
        type: String,
        required: true
    },
    ruta: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Misdocumentos', MisdocumentosSchema);