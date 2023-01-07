const mongoose = require('mongoose');

const NotificacionesadminSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechacreacion: {
        type: String,
        required: true
    },
    fechaexpiracion: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Notificacionesadmin', NotificacionesadminSchema);