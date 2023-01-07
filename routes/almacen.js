// Rutas para almacen
const express = require('express');
const router = express.Router();
const almacenController = require('../controllers/almacenController');

// api/almacen
router.post('/', almacenController.crearAlmacen);
router.get('/', almacenController.obtenerAlmacen);


router.delete('/:id', almacenController.eliminarAlmacen);
module.exports = router;