'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories/categories-model.js');
const products = require('../models/products/products-model.js');

function getModel(req, res, next) {
  let model = req.params.model; 
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}


router.param('model', getModel);


router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);

function handleGetAll(req, res, next) {
  req.model.get()
    .then(result => {
      let count = result.length;
      res.json({ count, result }); // {count: count, result:result }
    }).catch(next);
}

function handlePost(req, res, next) {
  req.model
    .post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model
    .get(id)
    .then(record => res.json(record))
    .catch(next);
}

module.exports = router;