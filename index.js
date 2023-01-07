const express = require('express');
const path = require('path');
const cors = require('cors');
const { dbConnection } = require('./db/config');
const multer = require("multer");
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();
//nodemailer
app.use(bodyParser.json());
app.use(cors())
////////////////

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();})


const https = require('https');
const http = require('http');
const fs = require('fs');

/*
const options = {
  key: fs.readFileSync('./ipicyt_cert.key', "utf8"), //url del key
  cert: fs.readFileSync('./a6b4b65fa29119e4.crt', "utf8") // url del certificado
}


console.log(options.key)
*/
// Base de datos
dbConnection();

// Directorio Público
app.use( express.static('public') );

// CORS
app.use( cors() );
// Lectura y parseo del body
app.use( express.json() );

//apis secundarias

//API ARCHIVO
app.use(express.static("./public"));

app.use('/api/notificaciones', require('./routes/notificaciones'));

app.use('/api/notificacionesadmin', require('./routes/notificacionesadmin'));

app.use('/api/videos', require('./routes/videos'));

app.use('/api/resetpassword', require('./routes/resetpassword'));

app.use('/api/misdocumentos', require('./routes/misdocumentos'));

app.use('/api/almacen', require('./routes/almacen'));

app.use('/api/clientes', require('./routes/clientes'));

app.use('/api/prestamos', require('./routes/prestamos'));

// Rutas registro y login
app.use( '/api/auth', require('./routes/auth') );
////////

///////////////despliegue del front dentro del build////////////////
/*
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})*/
///////////////////////////////////////////////////////////////////

/////////prueba de app.get//////
/*
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
 });

*/
 app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
/////

//public todo bien
const storage = multer.diskStorage({
  filename: function (res, file, cb) {
    const ext = file.originalname.split(".").pop(); //TODO pdf / jpeg / mp3
   // const fileName = 'manuales'; //TODO 12312321321
  const fileName = file.originalname.split(".")[0];
    cb(null, `${fileName}.${ext}`); //TODO 123123213232.pdf
  },
  destination: function (res, file, cb) {
    cb(null, `./public`);
  },
});

const upload = multer({ storage });
app.post("/upload", upload.single("myFile"), (req, res) => {
  const file = req.file.filename;
  console.log(file)
  res.send({ data: "OK", url: `http://localhost:4000/${file}` });
});

app.post('/formulario', (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
 })

/*
app.post("/k" , (req, res ) => {res.send({m:"hola"})} )
*/
/*
https.createServer(options, app).listen(443,() => {
  console.log('EL BACKEND CON HTTPS ESTA CORRIENDO EN EL PUERTO ' + 443);
});
*/


app.listen(4000, () => {
  console.log("corriendo en el puerto" + 4000);
  //console.log('El servidor esta corriendo perfectamente en el puerto 4000')
})