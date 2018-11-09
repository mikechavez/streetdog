const db = require('../models/index');
const jwt = require('jsonwebtoken');


exports.signin = async function (req, res, next) {
  try {
    const user = await db.User.findOne( {
      email: req.body.email
    });
    const { id, username, profileImageUrl } = user;



    const isMatch = await user.comparePassword(req.body.password);

    // if the provided password matches the pw stored in db
    // sign the jwt and return user info w/ token
    if (isMatch) {
      let token = jwt.sign(
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
    } else {
      console.log('hello');
      return next({
        status: 400,
        message: 'Invalid email or password, duder.'
      })
    }
  } catch (err) {
    return next({
      status: 400,
      message: 'Invalid email or password, broski.'
    })
  }
};

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
