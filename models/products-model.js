const db = require('./db-mongo');
const schema = db.Schema;
const productSchema = new schema({
  name:String,
  cathegory: {type:String, enum:["cellphone","tablet","tech"]},
  price: Number,
  picture:String,
  description:String
})

module.exports= db.model('Product',productSchema );