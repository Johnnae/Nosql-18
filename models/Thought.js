const { Schema, Types } = require("mongoose");
const { Thought } = require(".");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 4,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {},
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Initialize our Thought model
 const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
