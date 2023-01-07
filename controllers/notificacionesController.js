const Notificaciones = require("../models/Notificaciones");


exports.crearNotificaciones = async (req, res) => {

    try {
        let notificaciones;

        // Creamos nuestras notificaciones
        notificaciones = new Notificaciones(req.body);

        await notificaciones.save();
        res.send(notificaciones);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerNotificaciones = async (req, res) => {

    try {

        const notificacioness = await Notificaciones.find();
        res.json(notificacioness)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarNotificaciones = async (req, res) => {

    try {
        const { nombre, descripcion, usuario,fechacreacion } = req.body;
        let notificaciones = await Notificaciones.findById(req.params.id);

        if(!notificaciones) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        notificaciones.nombre = nombre;
        notificaciones.descripcion = descripcion;
        notificaciones.fechacreacion = fechacreacion;
        notificaciones.usuario = usuario;

        notificaciones = await Notificaciones.findOneAndUpdate({ _id: req.params.id },notificaciones, { new: true} )
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerNotificacion = async (req, res) => {

    try {
        let notificaciones = await Notificaciones.findById(req.params.id);

        if(!notificaciones) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        res.json(notificaciones);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarNotificaciones = async (req, res) => {

    try {
        let notificaciones = await Notificaciones.findById(req.params.id);

        if(!notificaciones) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Notificaciones.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}