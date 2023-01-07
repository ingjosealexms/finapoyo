const mongoose = require('mongoose');



const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('BASE DE DATOS EN LINEA');


    } catch (error) {
        console.log(error);
        throw new Error('ERROR A LA HORA DE CONECTAR A LA BASE DE DATOS');
    }



}


module.exports = {
    dbConnection
}