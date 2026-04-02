const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type : String,
    unique : true
  },
  password: String,
  language: String,
  xp: { type: Number, default: 0 },
  streak: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", UserSchema);