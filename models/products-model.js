const mongoose = require('mongoose');
const schema = mongoose.Schema;
const productSchema = new schema({
  name:String,
  cathegory: {type:String, enum:["cellphone","tablet","tech"]},
  price: Number,
  picture:String,
  description:String
})

module.exports= mongoose.model('Product',productSchema );