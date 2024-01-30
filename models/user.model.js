const mongoose = require("mongoose");
const validator = require("validator");
const userRoles = require("../utils/userRoles");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "filed must be a valid email address"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [userRoles.OWNER, userRoles.ADMIN, userRoles.CUSTOMER],
    default: userRoles.CUSTOMER,
  },
  cartId: {
    type: String,
  },
  ordersId: {
    type: Array,
  },
  token: {
    type: String,
  },
  __v: {
    type: Number,
    select: false,
  },
});

module.exports = mongoose.model("User", userSchema);
