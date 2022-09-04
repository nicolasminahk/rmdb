const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const UserModel = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  favorites: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", UserModel);
