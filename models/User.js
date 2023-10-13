const { Schema, Types } = require("mongoose");

const userSchema = new Schema(
  {
    userName: {
      type: String, 
      unique: true, 
      required: true,
      default: "Trimmed",
    },
    email: {
      type: String,
      required: true, 
      unique: true
     //default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
