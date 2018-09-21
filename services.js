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
  }
}

module.exports = serviceOperators;