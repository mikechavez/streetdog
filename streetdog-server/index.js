require('dotenv').config();
const app = require('./app');
const config = require('./config/config');


const server = app.listen(config.port, function() {
  console.log(`Server listening on port ${config.port}`);
})

module.exports = server;
