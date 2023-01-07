const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const options = {
    key: fs.readFileSync('./ipicyt_cert.key'), // Replace with the path to your key
    cert: fs.readFileSync('./ab3c6f5d30ee43ba.pem') // Replace with the path to your certificate
}

app.use((req, res, next) => {
    res.send('<h1>HTTPS Works!</h1>');
});

const port = 3000;

https.createServer(options, app).listen(port,() => {
    console.log('Server listening on port ' + port);
});