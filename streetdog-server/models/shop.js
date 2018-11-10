const mongoose = require('mongoose');
const User = require('./user');

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
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

shopSchema.pre('remove', async function(next) {
  try {
    let user = await User.findById(this.user);
    user.messages.remove(this.id);
    await user.save();
    return next();
  } catch(err) {
    return next(err);
  }
})

 const Shop = mongoose.model("Shop", shopSchema);
 module.exports = Shop;
