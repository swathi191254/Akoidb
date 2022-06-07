const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true},
      email: { type: String, required: true },
      number: { type: Number, required: true },
      password: { type: String, required: true },
      confirmPassword: { type: String, required: true },
      status: {type:Boolean, default: false},
      cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: false}],
    },
    {
      versionKey: false,
      timeStamps: true,
    }
  );

const User = mongoose.model("User ",userSchema);
module.exports = User;