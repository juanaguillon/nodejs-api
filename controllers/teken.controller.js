"use strict";

const mongodb = require('../models/db-mongo');
const user = require('../models/user-model');
const service = require('../services');

let tekenOperator = {
  singUp : ( req, res ) => {
    const user = new user({
      email: req.body.email,
      name: req.body.displayName
    });
    user.save( err => {
      if ( err ) res.status( 500 ).send({messageError:`Error al crear usuario ${err}`});

      return res.status(200).send({messageToken: service.createToken( user) })
    })
  }

}