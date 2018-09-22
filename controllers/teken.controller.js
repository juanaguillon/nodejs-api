"use strict";

const mongodb = require('../models/db-mongo');
const user = require('../models/user-model');
const service = require('../services');

let tekenOperator = {
  singUp : function( req, res ) {
    const userModel = new user({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });
    userModel.save( err => {

      if ( err ) res.status( 500 ).send({messageError:`Error al crear usuario ${err}`});

      res.status(200).send({messageToken: service.createToken( userModel) })
    })
  },
  signIn : ( req, res) => {
    user.find({email:req.body.email}, ( err, user) => {
      if (err) return res.status(500).send({messageSignIn:'Se ha creado un error de serivodor'});
      if (user.length < 1) return res.status(404).send({mensage404:'El usuario no existe'});
      res.user = user;
      res.status(200).send({message:'Te has logeado correctamente',token:service.createToken( user )});
    });

  }

}

module.exports = tekenOperator;
