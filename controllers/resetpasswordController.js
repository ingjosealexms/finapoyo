const Resetpassword = require("../models/Resetpassword");


exports.crearSolicitudes = async (req, res) => {

    try {
        let resetpassword;

        // Creamos nuestro producto
        resetpassword = new Resetpassword(req.body);

        await resetpassword.save();
        res.send(resetpassword);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerSolicitudes= async (req, res) => {

    try {

        const resetpasswords = await Resetpassword.find();
        res.json(resetpasswords)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizaSolicitudes = async (req, res) => {

    try {
        const { nombre,
            correo, 
            cargo, 
            grado
             
        } = req.body;
        let resetpassword = await Resetpassword.findById(req.params.id);

        if(!resetpassword) {
            res.status(404).json({ msg: 'No existe la solicitud' })
        }

        resetpassword.nombre = nombre;
    
        resetpassword.correo = correo;
        
        resetpassword.cargo = cargo;
        resetpassword.grado = grado;

        resetpassword = await Resetpassword.findOneAndUpdate({ _id: req.params.id },resetpassword, { new: true} )
        res.json(resetpassword);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerSolicitud = async (req, res) => {

    try {
        let resetpassword = await Resetpassword.findById(req.params.id);

        if(!resetpassword) {
            res.status(404).json({ msg: 'No existe la solicitud' })
        }
       
        res.json(resetpassword);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarSolicitudes = async (req, res) => {

    try {
        let resetpassword = await Resetpassword.findById(req.params.id);

        if(!resetpassword) {
            res.status(404).json({ msg: 'No existe la solicitud' })
        }
       
        await Resetpassword.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Solicitud eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}