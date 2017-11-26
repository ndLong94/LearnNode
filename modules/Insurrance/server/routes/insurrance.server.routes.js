'use strict';

var insurance = require('../controllers/insurance.server.controller');

module.exports = function(app) {
  app.route('/insurances')
    .get(insurance.getAllInsurance);
	
  app.route('/insurance')
    .post(insurance.createInsurance);

  app.route('/insurance/type')
    .post(insurance.findByType);
  // app.route('/insurance/group')
  //   .post(insurance.findByGroup); 
  // app.route('/activeinsurances')
  //   .post(insurance.findByStatus);  
};
