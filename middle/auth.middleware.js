"use strict";

const jwt = require('jwt-simple');
const moment = require('moment');
const { sst } = require('../config.app')

function isAuth( req, res, next ){
  if( !req.headers.authorization ){
    return res.status(403).send({messageAuth:'No tienes autorizacion'})
  }

  const token = req.headers.authorization.split(" ");
  const payload = jwt.decode( token, sst);
  if( payload.exp <= moment().unix() ){
    return res.status( 401).send({messagePayload:'El token ha expirado'})

  
  }
  req.user = payload.sub;
  next()
}

module.exports = isAuth;