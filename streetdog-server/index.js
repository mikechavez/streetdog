const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');


app.use(cors());
app.use(bodyParser.json());

// TODO: ROUTES


app.listen(config.port, function(err) {
  if(err) throw err;
  console.log(`Server listening on port ${config.port}`);
})