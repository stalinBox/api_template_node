const express = require('express');
const logger = require('morgan');
const bodyParser = require("body-parser");

const app = express();

//MIDDLEWARES
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
require('../src/routers')(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'API REST UBICACIONES Ready..!!',
}));

module.exports = app;