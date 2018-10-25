const mongoose = require("mongoose");
const config = require('../config/config');


// show mongo querys in terminal output
mongoose.set("debug", true);

// tell mongoose methods to return promises
mongoose.Promise = Promise; 

mongoose.connect(config.db, {
  keepAlive: true,
  useMongoClient: true
});