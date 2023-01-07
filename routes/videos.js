// Rutas para producto
const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');

// api/productos
router.post('/', videosController.crearVideos);
router.get('/', videosController.obtenerVideos);
router.put('/:id', videosController.actualizarVideos);
router.get('/:id', videosController.obtenerVideo);
router.delete('/:id', videosController.eliminarVideos);

module.exports = router;