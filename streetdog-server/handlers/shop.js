const db = require('../models');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

exports.createShop = async function(req, res, next) {
  try {
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
    return res.status(200).json(foundShop);
  } catch (err) {
    return next(err);
  }
}

exports.getShop = async function (req, res, next) {
  try {
    console.log('hello');
    const shop = await db.Shop.findById(req.params.shop_id);
    if (shop) {
      return res.status(200).json(shop);
    }
    return next({
      status: 400,
      message: 'Invalid shopId, duder.'
    })

  } catch (err) {
    return next(err);
  }
}

exports.deleteShop = async function(req, res, next) {
  try {
    const shop = await db.Shop.findById(req.params.shop_id);
    if (shop) {
      await shop.remove();
      return res.status(200).json({
        shop_id: req.params.shop_id,
        message: "removed"
      });
    }
    return next({
      status: 400,
      message: 'Invalid shopId, duder.'
    })

  } catch (err) {
    return next(err);
  }
}
