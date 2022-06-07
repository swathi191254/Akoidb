const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const product = mongoose.model("Product", productSchema);

module.exports = product;
