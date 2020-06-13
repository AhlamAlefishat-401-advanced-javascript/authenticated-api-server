'use strict';

module.exports = (req, res, next) => {
  console.log('Request', req.method,'path', req.path, 'requestTime', req.requestTime);
  next();
}; 