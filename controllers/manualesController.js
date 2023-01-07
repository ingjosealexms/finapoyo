const Manuales = require("../models/Manuales");


exports.crearManuales = async (req, res) => {

    try {
        let producto;

        // Creamos nuestro manual
        manuales = new Manuales(req.body);

        await manuales.save();
        res.send(manuales);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerManuales = async (req, res) => {

    try {

        const manuales = await Manuales.find();
        res.json(manuales)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

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

exports.eliminarManuales = async (req, res) => {

    try {
        let manuales = await Manuales.findById(req.params.id);

        if(!manuales) {
            res.status(404).json({ msg: 'No existe el manual' })
        }
       
        await Manuales.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'manual eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}