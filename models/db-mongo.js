const { db } = require('../config.app');
const mongoose = require('mongoose');
mongoose.connect( db ,{useNewUrlParser:true, useCreateIndex:true});
module.exports = mongoose;