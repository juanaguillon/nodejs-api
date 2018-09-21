"use strict";

const { sst } = require('./config.app');
const jwt = require('jwt-simple');
const moment = require('moment');

let serviceOperators = {
  createToken: ( user )=> {
    const payload = {
      sub: user._id,
      iat: moment().unix(),
      exp: moment().add(14, 'days').unix() 
    }

    jwt.encode( payload, sst );
  },
  decodeToken : function ( token ){
    const decode = new Promise( (resolve , reject ) =>{
      try {
        const payload = jwt.decode( token, sst );
        if (payload.exp <= moment().unix()) {
          return reject({
            status:401,
            message:'El tojken ha expirado'
          })
        }

        resolve( payload.sub );
      } catch (err) {
        reject({
          status:500,
          message: 'Invalid token'
        })
      }
    } );
    return decode;
  } 
}

module.exports = serviceOperators;