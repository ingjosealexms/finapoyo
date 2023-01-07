const Clientes = require("../models/Clientes");


exports.crearClientes = async (req, res) => {

    try {
   

        // Creamos nuestro documentos
        clientes = new Clientes(req.body);

        await clientes.save();
        res.send(clientes);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerClientes = async (req, res) => {

    try {

        const clientes = await Clientes.find();
        res.json(clientes)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


/*
exports.actualizarManuales = async (req, res) => {

    try {
        const { nombre, descripcion, tipo, autor, ruta } = req.body;
        let manuales = await Manuales.findById(req.params.id);

        if(!manuales) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        manuales.nombre = nombre;
        manuales.descripcion = descripcion;
        manuales.tipo = tipo;
        manuales.autor = autor;
        manuales.ruta = ruta;

        manuales = await Manuales.findOneAndUpdate({ _id: req.params.id },manuales, { new: true} )
        res.json(manuales);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerManual = async (req, res) => {

    try {
        let manuales = await Manuales.findById(req.params.id);

        if(!manuales) {
            res.status(404).json({ msg: 'No existe el manual' })
        }
       
        res.json(manuales);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
*/

exports.eliminarClientes = async (req, res) => {

    try {
        let clientes = await Clientes.findById(req.params.id);

        if(!clientes) {
            res.status(404).json({ msg: 'No existe el cliente' })
        }
       
        await Clientes.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'cliente eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}