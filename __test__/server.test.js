const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const superGooseServer = supergoose(server);

describe('Products',()=>{
  it('New product Added',()=>{
    const catObj = {
      'category': 'electronics',
      'name': 'Headset',
      'display_name': 'Headset',
      'description': 'Headset'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        const record = result.body;
        Object.keys(catObj).forEach(key=>{
          expect(record[key]).toEqual(catObj[key]);
        });
      });
  });

  it('Get new Product',()=>{
    const catObj = {
      'category': 'electronics',
      'name': 'Coffee Machine',
      'display_name': 'Coffee Machine',
      'description': 'good'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        return superGooseServer.get('/api/v1/products')
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(catObj[key]);
            });
          });

      });
  });

  it('Get Product by id',()=>{
    const catObj = {
      'category': 'electronics',
      'name': 'Washing machine',
      'display_name': 'Washing machine',
      'description': 'Washing machine'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.get(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body[0][key]).toEqual(catObj[key]);
            });
          });

      });
  });

  it('Update by id',()=>{
    const catObj = {
      'category': 'electronics',
      'name': 'Tablet',
      'display_name': 'Tablet',
      'description': 'Tablet'};
    const obj2 = {
      'category': 'electronics',
      'name': 'Mixer',
      'display_name': 'Mixer',
      'description': 'Mixer'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.put(`/api/v1/products/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });

      });
  });

  it('Delete By id',()=>{
    const catObj = {
      'category': 'electronics',
      'name': 'Laptop',
      'display_name': 'Laptop',
      'description': 'Laptop'};
    return superGooseServer.post('/api/v1/products')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.delete(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body).toEqual({});
            });
          });

      });
  });
});

describe('categories routs',()=>{
  it('it should post a new record',()=>{
    const catObj = {
      'name': 'Headset',
      'display_name': 'Headset',
      'description': 'Headset'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        const record = result.body;
        Object.keys(catObj).forEach(key=>{
          expect(record[key]).toEqual(catObj[key]);
        });
      });
  });

  it('it should get a new record',()=>{
    const catObj = {
      'name': 'Coffee Machine',
      'display_name': 'Coffee Machine',
      'description': ''};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        return superGooseServer.get('/api/v1/categories')
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(catObj[key]);
            });
          });

      });
  });

  it('it should get a record by id',()=>{
    const catObj = {
      'name': 'SmartPhone',
      'display_name': 'SmartPhone',
      'description': 'SmartPhone'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.get(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body[0][key]).toEqual(catObj[key]);
            });
          });

      });
  });

  it('it should update a record by id',()=>{
    const catObj = {
      'name': 'Tablet',
      'display_name': 'Tablet',
      'description': 'Tablet'};
    const obj2 = {
      'name': 'Mixer',
      'display_name': 'Mixer',
      'description': 'Mixer'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.put(`/api/v1/categories/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });

      });
  });

  it('it should delete a record by id',()=>{
    const catObj = {
      'name': 'Laptop',
      'display_name': 'Laptop',
      'description': 'Laptop'};
    return superGooseServer.post('/api/v1/categories')
      .send(catObj)
      .then((result)=>{
        const id = result.body._id;
        return superGooseServer.delete(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(catObj).forEach(key=>{
              expect(item.body).toEqual({});
            });
          });

      });
  });
}); 
