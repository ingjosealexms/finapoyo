const mongoose = require('mongoose');

const ResetpasswordSchema = mongoose.Schema({
 

   
    /* NUEVAS CONSTANTES DE MODELOS*/
   
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    }


    /* --------------------------- */
});

module.exports = mongoose.model('Resetpassword', ResetpasswordSchema);