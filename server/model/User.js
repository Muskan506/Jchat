const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deviceType: {
    type: String,
  },

  groupTagName: {
    type: String,
  },
  ipAddress: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
