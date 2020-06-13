const express = require('express');
const products = require('../models/products/products-model.js');
const router = express.Router();




router.get('/products', getproductsHandler);

router.get('/products/:id', getByIdproductsHandler);

router.post('/products', postproductsHandler);

router.put('/products/:id', updateByIdproductsHandler);

router.delete('/products/:id', deleteByIdproductsHandler);


async function getproductsHandler(req,res,next){
  try {
    const data = await products.get();
    const count = data.length;
    const result = data;
    res.json({count,result});
  } catch (error) {
    next(error.message);
  }

}


async function getByIdproductsHandler(req,res,next){
  const id = req.params.id;
  try {
    const data = await products.get(id);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}

async function postproductsHandler(req,res,next){
  try {
    const data = await products.create(req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}



async function updateByIdproductsHandler(req,res,next){
  const id = req.params.id;
  try {
    const data = await products.update(id,req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}


async function deleteByIdproductsHandler(req,res,next){
  const id = req.params.id;
  try {
    await products.delete(id);
    res.json({});
  } catch (error) {
    next(error.message);
  }
}

module.exports = router;