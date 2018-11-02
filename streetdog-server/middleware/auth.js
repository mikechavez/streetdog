require('dotenv').load();
const jwt = require('jsonwebtoken');

exports.loginRequired = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, payload) {
      if(payload) {
        return next();
      } else {
        return next({
          status: 401,
          message: 'Please log in first, duder'
        });
      }
    });
  } catch (err) {
    return next({
      status: 401,
      message: 'Please log in first, broski'
    })
  }
}
