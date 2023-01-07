// Rutas para producto
const express = require('express');
const router = express.Router();
const notificacionesadminController = require('../controllers/notificacionesadminController');

// api/productos
router.post('/', notificacionesadminController.crearNotificacionesadmin);
router.get('/', notificacionesadminController.obtenerNotificacionesadmin);
router.put('/:id', notificacionesadminController.actualizarNotificacionesadmin);
router.get('/:id', notificacionesadminController.obtenerNotificacionadmin);
router.delete('/:id', notificacionesadminController.eliminarNotificacionesadmin);

module.exports = router;