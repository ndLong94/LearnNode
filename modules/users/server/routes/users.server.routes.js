'use strict';

var users = require('../controllers/users.server.controller');

module.exports = function(app) {
  app.route('/helloworld')
    .get(users.helloworld);

  app.route('/get-user')
    .get(users.getUserByName);

  app.route('/users')
    .get(users.getAllUser);
	
  app.route('/create-user')
    .post(users.createUser);
};
