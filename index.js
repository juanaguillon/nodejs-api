const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlEncoder = bodyParser.urlencoded({extended:false});
const jsonParser = bodyParser.json();

app.set('port', process.env.PORT || 3000 );

app.use( urlEncoder );
app.use( jsonParser );

app.get('/:name', function( req, res ){
  res.send({Message:`Hola ${req.params.name}`});
})

app.listen(app.get('port'),()=>{
  console.log('Servidor funcionando en puerto', app.get('port') );
})