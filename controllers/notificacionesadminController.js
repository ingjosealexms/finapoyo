const Notificacionesadmin = require("../models/Notificacionesadmin");


exports.crearNotificacionesadmin = async (req, res) => {

    try {
        let notificacionesadmin;

        // Creamos nuestras notificaciones
        notificacionesadmin = new Notificacionesadmin(req.body);

        await notificacionesadmin.save();
        res.send(notificacionesadmin);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerNotificacionesadmin = async (req, res) => {

    try {

        const notificacionesadmins = await Notificacionesadmin.find();
        res.json(notificacionesadmins)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarNotificacionesadmin = async (req, res) => {

    try {
        const { nombre, descripcion, fechacreacion, fechaexpiracion } = req.body;
        let notificacionesadmin = await Notificacionesadmin.findById(req.params.id);

        if(!notificacionesadmin) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        notificacionesadmin.nombre = nombre;
        notificacionesadmin.descripcion = descripcion;
        notificacionesadmin.fechacreacion = fechacreacion;
        notificacionesadmin.fechaexpiracion = fechaexpiracion;

        notificacionesadmin = await Notificacionesadmin.findOneAndUpdate({ _id: req.params.id },notificacionesadmin, { new: true} )
        res.json(producto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerNotificacionadmin = async (req, res) => {

    try {
        let notificacionesadmin = await Notificacionesadmin.findById(req.params.id);

        if(!notificacionesadmin) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        res.json(notificacionesadmin);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarNotificacionesadmin = async (req, res) => {

    try {
        let notificacionesadmin = await Notificacionesadmin.findById(req.params.id);

        if(!notificacionesadmin) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Notificacionesadmin.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}