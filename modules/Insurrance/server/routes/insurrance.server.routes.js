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

  app.route('/insurance/status')
    .get(insurance.findByStatus); 

  app.route('/activeinsurances')
    .get(insurance.findByStatusActive); 

  app.route('/insurance/:id/createdAt')
    .get(insurance.findTimeCreatedById);  

  app.route('/insurance/:id/value')
    .get(insurance.findValueById); 
    
  app.route('/insurance/:id/value')
    .get(insurance.findValueById); 

  app.route('/insurance/:id/period')
    .get(insurance.findPeriodById); 

  app.route('/insurance/:id/policy')
    .get(insurance.findPolicyById); 

  app.route('/insurance/:id/price')
    .get(insurance.findPriceById); 

  app.route('/insurance/:id/description')
    .get(insurance.findDescriptionById);
    
  app.route('/insurance/:id/update')
    .get(insurance.findUpdateInfoById);
};
