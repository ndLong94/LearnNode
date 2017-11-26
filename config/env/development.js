'use strict';

var defaultEnvConfig = require('./default');

module.exports = {
  db: {
    uri: 'mongodb://youruser:yourpassword@localhost/yourdatabase',
    options: {
      user: process.env.MONGODB_USERNAME || 'youruser',
      pass: process.env.MONGODB_PASSWORD || 'yourpassword'
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  app: {
    title: defaultEnvConfig.app.title + ' - Develop Environment'
  }
};
