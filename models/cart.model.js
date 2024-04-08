const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  products: [
    {
      productsId: {
        type: String,
      },
      count: {
        type: Number,
      },
    },
  ],
  __v: {
    type: Number,
    select: false,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
