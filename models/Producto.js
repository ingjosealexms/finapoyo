const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Videos', VideoSchema);