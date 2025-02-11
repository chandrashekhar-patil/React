const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: { type: String, default: null },
  tokenExpiry: { type: Date, default: null },
});

module.exports = mongoose.model("User", UserSchema);
