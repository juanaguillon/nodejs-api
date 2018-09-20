const bodyParser = require('body-parser');
const urlEncoder = bodyParser.urlencoded({extended:false});
const jsonParser = bodyParser.json();
const app = require('./controllers/routes');

app.use( urlEncoder );
app.use( jsonParser );

app.listen(app.get('port'),()=>{
  console.log('Servidor funcionando en puerto', app.get('port') );
})