const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true
  },
  description: {
    type: String,
    require: true
  }
});

 const Shop = mongoose.model("Shop", shopSchema);
 module.exports = Shop;
