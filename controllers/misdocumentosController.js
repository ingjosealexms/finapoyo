const Misdocumentos = require("../models/Misdocumentos");


exports.crearMisdocumentos = async (req, res) => {

    try {
        let producto;

        // Creamos nuestro documentos
        misdocumentos = new Misdocumentos(req.body);

        await misdocumentos.save();
        res.send(misdocumentos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerMisdocumentos = async (req, res) => {

    try {

        const misdocumentos = await Misdocumentos.find();
        res.json(misdocumentos)
        
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

exports.eliminarMisdocumentos = async (req, res) => {

    try {
        let misdocumentos = await Misdocumentos.findById(req.params.id);

        if(!misdocumentos) {
            res.status(404).json({ msg: 'No existe el documento' })
        }
       
        await Misdocumentos.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'documento eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}