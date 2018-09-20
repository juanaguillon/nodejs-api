const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlEncoder = bodyParser.urlencoded({extended:false});
const jsonParser = bodyParser.json();

const db = require('./models/db-mongo'); 
const productModel = require('./models/products-model');


app.set('port', process.env.PORT || 3000 );

app.use( urlEncoder );
app.use( jsonParser );

app.get('/api/product', ( req, res) => {
  res.status(200).send({ message: [] })
})

app.get('/api/product/:product_id', (req, res )=>{

})

app.post('/api/product', ( req, res )=>{
  console.log('POST /api/product');
  console.log('The pet', req.body)
  let product = new productModel();
  product.name = req.body.name;
  product.price = req.body.price;
  product.picture = req.body.picture;
  product.cathegory = req.body.cathegory;
  product.description = req.body.description;

  product.save( ( err, respose )=>{
    if ( err ) throw err;
    console.log('Producto salvado');

    res.status(200).send({message:'Producto salvado', product:respose});
    
  })
})

app.put('/api/product/:product_id',( req, res )=>{

})

app.delete('/api/product/:product_id')

app.listen(app.get('port'),()=>{
  console.log('Servidor funcionando en puerto', app.get('port') );
})