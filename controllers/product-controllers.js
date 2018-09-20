"use strict";
const db = require('../models/db-mongo');
const productModel = require('../models/products-model');

let productsOperators = {} ;
productsOperators.getProducts = function( req, res ){
  productModel.find({}, (err, allProducts) => {

    if (err) res.status(500).send({ messageError: `Se ha provocado un error interno en el servidor ${err}` });
    if (!allProducts) res.status(404).send({ messageError: 'No se ha encontrado ningun producto' })
    res.status(200).send({ allProducts: allProducts })
  })
}

productsOperators.getProduct = function( req, res ){

  let productID = req.params.product_id;

  productModel.findById(productID, (err, product) => {
    if (err) res.status(500).send({ messageError: `Se ha provocado un error interno en el servidor ${err}`});
    if (!product) res.status(404).send({ messageError: 'No se ha encontrado el producto requerido' });
    res.status(200).send({ product: product });

  });
}

productsOperators.addProduct = function( req, res ){

  console.log('POST /api/product');
  console.log('The pet', req.body)
  let product = new productModel();
  product.name = req.body.name;
  product.price = req.body.price;
  product.picture = req.body.picture;
  product.cathegory = req.body.cathegory;
  product.description = req.body.description;

  product.save((err, respose) => {
    if (err) throw err;
    console.log('Producto salvado');

    res.status(200).send({ message: 'Producto salvado', product: respose });

  })
}

productsOperators.updateProduct = function ( req , res ){
  let productId = req.params.product_id;
  let upbody = req.body
  console.log(upbody)
  productModel.findOneAndUpdate(productId, upbody, (err, newProduct) => {
    if (err) res.status(500).send({ messageError: `Se ha producido un error al actualizar el producto` });
    if (!newProduct) res.status(404).send({ messageError: `La busqueda de producto no se ha encontrado` });

    res.status(200).send({ messageSusccess: 'Se ha actualizado el producto' });    
  });
}

productsOperators.deleteProduct = function ( req, res ){
  let productID = req.params.product_id;
  productModel.findOneAndRemove(productID, err => {
    if (err) rest.status(500).send({ messageError: `Error al borrar el producto` });
    rest.status(200).send({ messageSucess: 'Se ha borrado el producto' })
  });
}

module.exports = productsOperators;