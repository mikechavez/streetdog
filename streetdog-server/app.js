const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/auth', authRoutes);


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
