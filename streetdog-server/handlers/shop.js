const db = require('../models');

exports.createShop = async function(req, res, next) {
  try {
    db.User.find({});
    db.Shop.find({});
    const shop = await db.Shop.create({
      name: req.body.name,
      location: req.body.location,
      hours: req.body.hours,
      days: req.body.days,
      description: req.body.description,
      user: req.params.id
    })
    const foundUser = await db.User.findById(req.params.id);
    foundUser.shop = shop._id;
    foundUser.save();

    const foundShop = await db.Shop.findById(shop._id).populate('user', {
      username: true,
      profileImageUrl: true
    });
    return res.status(200).json();
  } catch (err) {
    return next(err);
  }
}

// exports.getShop = async function (req, res, next) {
//   try {
//     const foundShop = await db.Shop.find(req.params.)
//   } catch (err) {

//   }
// }
