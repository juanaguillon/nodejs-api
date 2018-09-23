const { port } = require('../config');
const app = require('../app');

const userCtrl = require('./teken.controller');
const productControll = require('./product-controllers');
const auth = require('../middle/auth.middleware');


app.get('/api/product', productControll.getProducts);
app.get('/api/product/:product_id', productControll.getProduct)
app.post('/api/product/', productControll.addProduct );
app.put('/api/product/:product_id', productControll.updateProduct)
app.delete('/api/product/:product_id', productControll.deleteProduct);
app.post('/private', auth, ( req, res ) => {
  res.status(200).send({message:'Tienes acceso'});
} ); 

app.post('/signup', userCtrl.singUp );
app.post('/signin', userCtrl.signIn );
app.get('/pugger', function( req, res ){
  res.render('index', {title:"hey", message:'Hello there!'});
})

app.set('port', port );

module.exports = app;