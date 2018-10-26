const app = require('./app');
const config = require('./config/config');


app.listen(config.port, function() {
  console.log(`Server listening on port ${config.port}`);
})
