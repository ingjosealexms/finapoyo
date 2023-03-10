const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const usuariosController = require('../controllers/auth');


const router = Router();

// Crear un nuevo usuario
router.post( '/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    check('area', 'El area es obligatoria').not().isEmpty(),

    validarCampos
], crearUsuario );

// Login de usuario
router.post( '/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
    check('email', 'El email es obligatorio').not().isEmpty(),
    validarCampos
], loginUsuario );

// Validar y revalidar token
router.get( '/renew', validarJWT , revalidarToken );

router.get('/', usuariosController.obtenerUsuarios);
module.exports = router;