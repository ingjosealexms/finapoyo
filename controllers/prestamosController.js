const Prestamos = require("../models/Prestamos");


exports.crearPrestamos = async (req, res) => {

    try {
   

        // Creamos nuestro documentos
        prestamos = new Prestamos(req.body);

        await prestamos.save();
        res.send(prestamos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPrestamos = async (req, res) => {

    try {

        const prestamos = await Prestamos.find();
        res.json(prestamos)
        
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

exports.eliminarPrestamos = async (req, res) => {

    try {
        let prestamos = await Prestamos.findById(req.params.id);

        if(!prestamos) {
            res.status(404).json({ msg: 'No existe el prestamo' })
        }
       
        await Prestamos.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'prestamo eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}