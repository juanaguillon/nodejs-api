const express = require('express');
const bodyParser = require('body-parser');
const urlEncoder = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const app = express();


app.use(urlEncoder);
app.use(jsonParser);

module.exports = app;