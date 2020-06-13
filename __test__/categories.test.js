'use strict';
require('@code-fellows/supergoose');
const categories = require('../lib/models/categories/categories-model.js');
const obj = {
  'name': 'light',
  'display_name': 'light',
  'description': 'light'};
const obj2 = {
  'name': 'Washing Machine',
  'display_name': 'Washing Machine',
  'description': 'Washing Machine'};
describe('categories Model', () => {
  it('create', () => {
    return categories.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });
  it('get', () => {
    return categories.get().then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });
  it('put', () => {
    return categories.get().then((result) => {
      const id = result[0]._id;
      return categories.update(id,obj2).then((result) => {
        Object.keys(obj2).forEach((key) => {
          expect(result[key]).toEqual(obj2[key]);
        });
      });
    });

  });
  it('put', () => {
    return categories.get().then((result) => {
      const id = result[0]._id;
      return categories.delete(id).then((result) => {
        return categories.get().then((result2) => {
          expect(result2).toEqual([]);
        });
      });
    });
  });
}); 