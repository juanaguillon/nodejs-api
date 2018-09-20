const mongoose = require('mongoose');
const schema = mongoose.Schema;
const productSchema = new schema({
  name:string,
  cathegory: {type:string, enum:["cellphone","tablet","tech"]},
  price: number,
  picture:string,
  description:string
})

module.exports= mongoose.schema('Product',productSchema );