// Rutas para producto
const express = require('express');
const router = express.Router();
const misdocumentosController = require('../controllers/misdocumentosController');

// api/productos
router.post('/', misdocumentosController.crearMisdocumentos);
router.get('/', misdocumentosController.obtenerMisdocumentos);


router.delete('/:id', misdocumentosController.eliminarMisdocumentos);

module.exports = router;