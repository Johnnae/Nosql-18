const { Schema, Model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    responseBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
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
  }
);

// Initialize our reaction model
const Thought = model("reaction", reactionSchema);

module.exports = reaction;

  