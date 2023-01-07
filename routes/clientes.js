// Rutas para almacen
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// api/almacen
router.post('/', clientesController.crearClientes);
router.get('/', clientesController.obtenerClientes);


router.delete('/:id', clientesController.eliminarClientes);
module.exports = router;