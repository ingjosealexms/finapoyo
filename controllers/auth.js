const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const jwt = require('jsonwebtoken');




const crearUsuario = async(req, res = response) => {

    const { email, name, password, area } = req.body;

    try {
        // Verificar el email
        const usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario( req.body );

        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generar el JWT
        const token = await generarJWT( dbUser.id, name, email, area);

        // Crear usuario de DB
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            area,
            token
        });

    

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}


const loginUsuario = async(req, res = response) => {

    const { email, password, area} = req.body;

    try {
        
        const dbUser = await Usuario.findOne({ email });

        if(  !dbUser ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            });
        }

        // Confirmar si el password hace match
        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es válido'
            });
        }

        // Generar el JWT
        const token = await generarJWT( dbUser.id, dbUser.name, dbUser.email, dbUser.area );

        // Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email:  dbUser.email,
            area: dbUser.area,
            token
            
        });



    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const revalidarToken = async(req, res = response ) => {

    const { uid, name , email, area} = req;

    // Generar el JWT
    const token = await generarJWT( uid, name , email, area);

    return res.json({
        ok: true,
        uid,
        name,
        email,
        area,
        token
    });

}

const obtenerUsuarios= async (req,  res= response ) => {

    try {

    
        const usuarios = await Usuario.find();

           


        res.json(usuarios)
        
         
       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}






module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    obtenerUsuarios
}