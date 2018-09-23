const { db } = require('../config');
const mongoose = require('mongoose');
mongoose.connect( db ,{useNewUrlParser:true, useCreateIndex:true});
module.exports = mongoose;