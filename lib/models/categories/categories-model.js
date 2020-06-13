'use strict';
const schema = require('./categories-schema.js');
const Model = require('../mongo.js');

class categories extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new categories(schema);