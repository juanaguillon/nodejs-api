const db = require('mongoose');
db.connect('mongodb://localhost:27017/products-node',{useNewUrlParser:true});

module.exports = db;