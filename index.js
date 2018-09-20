const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlEncoder = bodyParser.urlencoded({extended:false});
const jsonParser = bodyParser.json();
const productControll = require('./controllers/product-controllers');


app.set('port', process.env.PORT || 3000 );

app.use( urlEncoder );
app.use( jsonParser );

app.get('/api/product', productControll.getProducts );
app.get('/api/product/:product_id', productControll.getProduct)
app.post('/api/product', productControll.addProduct)
app.put('/api/product/:product_id', productControll.updateProduct)
app.delete('/api/product/:product_id', productControll.deleteProduct);

app.listen(app.get('port'),()=>{
  console.log('Servidor funcionando en puerto', app.get('port') );
})