"use strict";

const db = require('./db-mongo');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto')
const schema = db.Schema;

const userSchema = new schema({
  name:String,
  email: { type:String, unique:true, lowercase:true},
  avatar: String,
  password: { type:String, select:false},
  signupDate: { type: Date, default:Date.now()},
  lastLogin: Date
});

userSchema.pre('save', ( next ) => {
   let user = this;
   if ( !user.isModified('password') ) return next();

   bcrypt.genSalt( 10, (err, salt) => {
     if ( err ) return next( err );
     
     bcrypt.hash( user.password, salt, null, ( err, hash ) => {
       if( err ) return next( err );
       
       user.password = hash;
       next()
     } )
     
   } )
} )

userSchema.methods.gravatar = err => {
  if ( !this.email ) return 'https://gravatar.com/avatar/?s=200&d=retro';

  const md5 = crypto.createHash('md5').update( this.email ).digest( 'hex' );
  return `https://gravatar.com/avatar/${md5}?s=200&d=retro`;
}

module.exports = db.model('User', userSchema );