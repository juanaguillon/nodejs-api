const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlEncoder = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const productControll = require('./product-controllers');

app.use(urlEncoder);
app.use(jsonParser);

app.get('/api/product', productControll.getProducts);
app.get('/api/product/:product_id', productControll.getProduct)
app.post('/api/product/', productControll.addProduct );
app.put('/api/product/:product_id', productControll.updateProduct)
app.delete('/api/product/:product_id', productControll.deleteProduct);

app.set('port', process.env.PORT || 3000);

module.exports = app;