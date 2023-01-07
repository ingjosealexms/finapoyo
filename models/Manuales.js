const mongoose = require('mongoose');

const ManualesSchema = mongoose.Schema({
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
    }


});

module.exports = mongoose.model('Manuales', ManualesSchema);