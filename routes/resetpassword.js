// Rutas para producto
const express = require('express');
const router = express.Router();
const resetpasswordController = require('../controllers/resetpasswordController');

// api/productos
router.post('/', resetpasswordController.crearSolicitudes);
router.get('/', resetpasswordController.obtenerSolicitudes);
router.put('/:id', resetpasswordController.actualizaSolicitudes);
router.get('/:id', resetpasswordController.obtenerSolicitud);
router.delete('/:id', resetpasswordController.eliminarSolicitudes);

module.exports = router;