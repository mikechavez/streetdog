const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createShop,
  getShop,
  deleteShop
} = require ('../handlers/shop');

router.route('/register').post(createShop);

router.route('/:shop_id')
  .get(getShop)
  .delete(deleteShop)

module.exports = router;
