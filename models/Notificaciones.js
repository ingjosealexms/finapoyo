const mongoose = require('mongoose');

const NotificacionesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    fechacreacion: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Notificaciones', NotificacionesSchema);