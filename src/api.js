const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const router = express.Router();

app.use(cors())
app.options('*', cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

const indexRoute = require('./routes/indexRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/' , indexRoute);

module.exports = app;