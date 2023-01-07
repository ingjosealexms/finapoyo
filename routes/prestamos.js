// Rutas para prestamos
const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamosController');

// api/prestamos
router.post('/', prestamosController.crearPrestamos);
router.get('/', prestamosController.obtenerPrestamos);


router.delete('/:id', prestamosController.eliminarPrestamos);
module.exports = router;