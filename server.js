const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var mongoose = require('mongoose');
var compression = require('compression')


const app = express();
app.use(compression());
app.all('/*', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,Authorization');

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    }
    else {
        next();
    }
});

const api = require('./routes/api.js');

const port = process.env.PORT || '30001';
app.set('port', port);

app.use(morgan('dev'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('', api);
app.use(express.static('public/dist'))

// mongoose.connect("mongodb://raja:raja@ds129946.mlab.com:29946/zeetabyte");
mongoose.connect("mongodb://localhost:27017/electron");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("MongoDB Connected");
});


const server = http.createServer(app);
server.listen(port, () => console.log(`Magic Happens on port ${port}`));



