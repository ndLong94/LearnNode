'use strict';

var insurance = require('../controllers/insurance.server.controller');

module.exports = function(app) {
  app.route('/insurances')
    .get(insurance.getAllInsurance);
  app.route('/insurance')
    .post(insurance.createInsurance);
  app.route('/insurance')
    .get(insurance.findInsurance);
  app.route('/insurance/type')
    .get(insurance.findByType);
  app.route('/insurance/group')
    .get(insurance.findByGroup);
  app.route('/insurance/:id')
    .get(insurance.findById);
  // app.route('/insurance/group')
  //   .post(insurance.findByGroup); 
  // app.route('/activeinsurances')
  //   .post(insurance.findByStatus);  
};
