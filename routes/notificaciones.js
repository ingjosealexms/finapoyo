// Rutas para producto
const express = require('express');
const router = express.Router();
const notificacionesController = require('../controllers/notificacionesController');

// api/productos
router.post('/', notificacionesController.crearNotificaciones);
router.get('/', notificacionesController.obtenerNotificaciones);
router.put('/:id', notificacionesController.actualizarNotificaciones);
router.get('/:id', notificacionesController.obtenerNotificacion);
router.delete('/:id', notificacionesController.eliminarNotificaciones);

module.exports = router;