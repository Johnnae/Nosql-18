const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    console.log("Pinged my getThoughts route!")
    try {
      res.json("Got Thoughts!")
    } catch (err) {
      res.status(500).json(err);
    }
  },
  

  // Create a thought
  async createThought(req, res) {
    console.log("Pinged my createThoughts route!")
    try {
      res.json("Need to create Thought!")
    } catch (err) {
      res.status(500).json(err);
    }
  },
 // Delete a thought
 async deleteThought(req, res) {
  try {
    const thought = await thought.findOneAndDelete({ _id: req.params.thoughtId });

    if (!thought) {
      return res.status(404).json({ message: 'No thought with that ID' });
    }

    await user.deleteMany({ _id: { $in: thought.users } });
    res.json({ message: 'thought and users deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
},
};

