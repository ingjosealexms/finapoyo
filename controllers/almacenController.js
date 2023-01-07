const Almacen = require("../models/Almacen");


exports.crearAlmacen = async (req, res) => {

    try {
   

        // Creamos nuestro documentos
        almacen = new Almacen(req.body);

        await almacen.save();
        res.send(almacen);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAlmacen = async (req, res) => {

    try {

        const almacen = await Almacen.find();
        res.json(almacen)
        
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

exports.eliminarAlmacen = async (req, res) => {

    try {
        let almacen = await Almacen.findById(req.params.id);

        if(!almacen) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Almacen.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}