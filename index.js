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
  productModel.find({}, ( err , allProducts )=>{

    if ( err ) res.status(500).send({ messageError: `Se ha provocado un error interno en el servidor ${err}` });
    if (!allProducts) res.status(404).send({ messageError: 'No se ha encontrado ningun producto' })
    
    res.status(200).send({ allProducts: allProducts })
  })
})

app.get('/api/product/:product_id', (req, res )=>{

  let productID = req.params.product_id;

  productModel.findById( productID, ( err, product )=>{
    if ( err ) res.status(500).send({messageError:`Se ha provocado un error interno en el servidor ${ err }`});
    if ( ! product ) res.status(404).send({messageError:'No se ha encontrado el producto requerido'})
    
    res.status( 200 ).send({product: product });
    
  }  )
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

  let productId = req.params.product_id;
  let upbody = req.body
  console.log( upbody )
  productModel.findOneAndUpdate( productId, upbody, ( err, newProduct ) => {
    if ( err ) res.status(500).send( {messageError:`Se ha producido un error al actualizar el producto`} );
    if ( ! newProduct ) res.status(404).send({messageError:`La busqueda de producto no se ha encontrado`});

    res.status(200).send({messageSusccess:'Se ha actualizado el producto'});
    // productModel.find({}, ( err, allProducts )=>{
    //   if ( err ) throw new Error('Se ha producido un error al mostrar los nuevos productos' + err );
    //   res.status(200).send({allProducts:allProducts});
    // })
  } );

})

app.delete('/api/product/:product_id',( req, rest) => {
  let productID = req.params.product_id;
  productModel.findOneAndRemove( productID, err => {
    if ( err ) rest.status( 500 ).send({messageError:`Error al borrar el producto`});
    rest.status(200).send( {messageSucess:'Se ha borrado el producto' } )
   
    
  } );
  
})

app.listen(app.get('port'),()=>{
  console.log('Servidor funcionando en puerto', app.get('port') );
})