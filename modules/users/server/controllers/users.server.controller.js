'use strict';

var path = require('path'),
  mongoose = require('mongoose'),
  UserModel = mongoose.model('User'),
  async = require('async');

exports.createUser = function(req, res) {
  async.auto({
   init: function(done) {
     if (!req.body.name) {
       done({
         code: 400,
         message: 'Name is missing'
       });
       return;
     }
     if (!req.body.password) {
       done({
         code: 400,
         message: 'Password is missing'
       });
       return;
     }

     done();
   },
   createAcc: ['init', function(data, done) {
     var user = {
       name: req.body.name,
       password: req.body.password
     };

     new UserModel(user).save(done);
   }]
 }, function(err, data) {
   if (err) {
     res.json(err);
     return;
   }
   res.json({
     code: 200,
     message: 'Register success'
   });
   return;
 });
}


exports.getUser = function(req, res) {
  async.auto({
   init: function(done) {
     if(!req.query.user_id) {
       done({
         code: 400,
         message: 'User id is missing'
       });
       return;
     }
   },
   getUser: ['init', function(data, done) {
     UserModel.findOne({'_id': req.body.user_id}).lean().exec(done);
   }]
 }, function(err, data) {
   if (err) {
     res.json(err);
     return;
   }
   res.json({
     code: 200,
     message: data.getUser
   });
   return;
 });
}

exports.getAllUser = function(req, res) {
    UserModel.find({}, function(err, users){
      console.log(users);
        if(err){
          res.json(err);
          return;
        }else{
          res.json({
            code: 200,
            message: users
          });
          };
    })
    return;
}

exports.getUserByName = function(req, res) {
  async.auto({
   init: function(done) {
     if(!req.query.name) {
       done({
         code: 400,
         message: 'User name is missing'
       });
       return;
     }
     UserModel.findOne({'name': req.query.name}, function(err, user){
       done(err, user)
     });
   },
   getUser: ['init', function(data, done) {
     console.log('data', data);
      done(null, data)
   }]
 }, function(err, data) {
   if (err) {
     res.json(err);
     return;
   }
   console.log('data', data)
   delete data.getUser;
   res.json({
     code: 200,
     message: data,
   });
   return;
 });
}
