const jwt = require('jsonwebtoken');


const generarJWT = ( uid, name, email, area) => {

  /* originalmente estaba aca
   const payload = { uid, name, email, area};
    */
    return new Promise( (resolve, reject) => {

/*lo pase de arriba para abajo */
    const payload = { uid, name, email, area};

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        }, (err, token) => {

            if ( err ) {
                // TODO MAL
                console.log(err);
                reject(err);

            } else {
                // TODO BIEN
                resolve( token )
            }

        })


    });

}


module.exports = {
    generarJWT
}