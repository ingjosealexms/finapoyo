const { response } = require('express');
const jwt = require('jsonwebtoken');

//const validarJWT = async ( req, res = response, next ) => {

const validarJWT = async ( req, res , next ) => {

    const token = req.header('x-token');

    if( !token  ) {
        return res.status(401).json({
            ok: false,
            msg: 'error en el token'
        });
    }

    try {

        const  { uid, name , email, area} = jwt.verify( token, process.env.SECRET_JWT_SEED)

        req.uid  = uid;
        req.name = name;
        req.email = email;
        req.area = area;
 // TODO OK!
    next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
}

module.exports = {
    validarJWT

}