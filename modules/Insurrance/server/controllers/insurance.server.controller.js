'use strict';

var path = require('path'),
  mongoose = require('mongoose'),
  InsuranceModel = mongoose.model('Insurance'),
  async = require('async');


exports.helloworld = function(req, res) {
  res.json('Thảo Ngáo');
}

exports.createInsurance = function(req, res) {
  async.auto({
   init: function(done) {
     if (!req.body.insuranceName) {
       done({
         code: 400,
         message: 'Name is missing'
       });
       return;
     }
     if (!req.body.providerId) {
       done({
         code: 400,
         message: 'Provider Id is missing'
       });
       return;
     }

     done();
   },
   createAcc: ['init', function(data, done) {
     var insurance = {
       insuranceName: req.body.insuranceName,
       providerId: req.body.providerId,
       type: req.body.type,
       group: req.body.group,
       active: req.body.active,
       value: req.body.value,
       price: {
        origin: req.body.origin,
        firstprice: req.body.firstprice,
        secondprice: req.body.secondprice,
        thirdprice: req.body.thirdprice,
        isCover: req.body.isCover,
        isDeductible: req.body.isDeductible,
        isDiscount: req.body.isDiscount
       },
       period: req.body.period,
       description: req.body.description,
       policy: req.body.policy,
       createdAt: req.body.createdAt,
       update: {
         time: req.body.time,
         updateBy: req.body.updateBy,
       }
       
     };

     new InsuranceModel(insurance).save(done);
   }]
 }, function(err, data) {
   if (err) {
     res.json(err);
     return;
   }
   res.json({
     code: 200,
     message: 'Create success'
   });
   return;
 });
}


exports.findInsurance = function(req, res) {
  InsuranceModel.findOne({"insuranceid": req.query.insuranceid}, function(err, insurance){
    console.log(insurances);
      if(err){
        res.json(err);
        return;
      }else{
        res.json({
          code: 200,
          message: insurances
        });
        };
  })
  return;
}


exports.getAllInsurance = function(req, res) {
  InsuranceModel.find({}, function(err, insurances){
    console.log(insurances);
      if(err){
        res.json(err);
        return;
      }else{
        res.json({
          code: 200,
          message: insurances
        });
        };
  })
  return;
}


exports.findByType = function(req, res) {
  InsuranceModel.find({"type": req.query.type}, function(err, insurances){
    console.log(insurances);
      if(err){
        res.json(err);
        return;
      }else{
        res.json({
          code: 200,
          message: insurances
        });
        };
  })
  return;
}

exports.findByGroup = function(req, res) {
  InsuranceModel.find({"group": req.query.group}, function(err, insurances){
    console.log(insurances);
      if(err){
        res.json(err);
        return;
      }else{
        res.json({
          code: 200,
          message: insurances
        });
        };
  })
  return;
}
exports.findById = function(req, res) {
  InsuranceModel.findOne({"insuranceid": req.params.id}, function(err, insurances){
    console.log(insurances);
      if(err){
        res.json(err);
        return;
      }else{
        res.json({
          code: 200,
          message: insurances
        });
        };
  })
  return;
}


exports.findByStatus = function(req, res) {
  InsuranceModel.find({"group": req.query.group}, function(err, insurances){
    console.log(insurances);
      if(err){
        res.json(err);
        return;
      }else{
        res.json({
          code: 200,
          message: insurances
        });
        };
  })
  return;
}
