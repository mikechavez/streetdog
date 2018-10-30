const db = require('../models');
const jwt = require('jsonwebtoken');




exports.signup = async function(req, res, next) {
  try {
    // create a user and extract properties
    const user = await db.User.create(req.body);
    const { id, username, profileImageUrl } = user;
    const token = jwt.sign(
      {
        id,
        username,
        profileImageUrl
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token
    });
    // create a token
  } catch (err) {
      if (err.code === 11000) {
        err.message = "Duplicate key error. That username and/or email is taken";
      }
      return next({
        status: 400,
        message: err.message
      });

  }
}
