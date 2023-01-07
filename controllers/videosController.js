const Videos = require("../models/Videos");


exports.crearVideos = async (req, res) => {

    try {
        let videos;

        // Creamos nuestro producto
        videos = new Videos(req.body);

        await videos.save();
        res.send(videos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerVideos = async (req, res) => {

    try {

        const videoss = await Videos.find();
        res.json(videoss)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarVideos = async (req, res) => {

    try {
        const { nombre, link, descripcion } = req.body;
        let videos = await Videos.findById(req.params.id);

        if(!videos) {
            res.status(404).json({ msg: 'No existe el video' })
        }

        videos.nombre = nombre;
        videos.link = link;
        videos.descripcion = descripcion;
        

        videos = await Videos.findOneAndUpdate({ _id: req.params.id },videos, { new: true} )
        res.json(videos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerVideo = async (req, res) => {

    try {
        let videos = await Videos.findById(req.params.id);

        if(!videos) {
            res.status(404).json({ msg: 'No existe el video' })
        }
       
        res.json(videos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarVideos = async (req, res) => {

    try {
        let videos = await Videos.findById(req.params.id);

        if(!videos) {
            res.status(404).json({ msg: 'No existe el video' })
        }
       
        await Videos.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'video eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}