const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');
const errorHandler = require('./handlers/error');

app.use(cors());
app.use(bodyParser.json());

// TODO: ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// HANDLERS
app.use(errorHandler);

module.exports = app;