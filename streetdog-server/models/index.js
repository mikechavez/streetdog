const mongoose = require("mongoose");
const config = require('../config/config');


// show mongo queries in terminal output
mongoose.set("debug", true);

// tell mongoose methods to return promises
mongoose.Promise = Promise;

mongoose.connect(config.db, {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.User = require('./user');
