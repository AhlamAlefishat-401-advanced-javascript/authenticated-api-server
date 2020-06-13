const express = require('express');
const categories = require('../models/categories/categories-model.js');
const router = express.Router();



router.get('/categories', getCategoriesHandler);

router.get('/categories/:id', getByIdCategoriesHandler);

router.post('/categories', postCategoriesHandler);

router.put('/categories/:id', updateByIdCategoriesHandler);

router.delete('/categories/:id', deleteByIdCategoriesHandler);



async function getCategoriesHandler(req,res,next){
  try {
    const data = await categories.get();
    const count = data.length;
    const result = data;
    res.json({count,result});
  } catch (error) {
    next(error.message);
  }

}



async function getByIdCategoriesHandler(req,res,next){
  const id = req.params.id;
  try {
    const data = await categories.get(id);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}


async function postCategoriesHandler(req,res,next){
  try {
    const data = await categories.create(req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}

async function updateByIdCategoriesHandler(req,res,next){
  const id = req.params.id;
  try {
    const data = await categories.update(id,req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}


async function deleteByIdCategoriesHandler(req,res,next){
  const id = req.params.id;
  try {
    await categories.delete(id);
    res.json({});
  } catch (error) {
    next(error.message);
  }
}

module.exports = router;