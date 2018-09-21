const { port } = require('../config.app');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const urlEncoder = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const productControll = require('./product-controllers');
const auth = require('../middle/auth.middleware');

app.use(urlEncoder);
app.use(jsonParser);

app.get('/api/product', productControll.getProducts);
app.get('/api/product/:product_id', productControll.getProduct)
app.post('/api/product/', productControll.addProduct );
app.put('/api/product/:product_id', productControll.updateProduct)
app.delete('/api/product/:product_id', productControll.deleteProduct);
app.get('/private', auth, ( ) => {
  res.status(200).send({message:'Tienes acceso'});
} ); 

app.set('port', port );

module.exports = app;