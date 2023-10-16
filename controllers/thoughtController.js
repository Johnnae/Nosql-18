const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    console.log("Pinged my getThoughts route!")
    try { 
      const thoughtData = await Thought.find({})
      res.json(thoughtData)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  

  // Create a thought in body
  async createThought(req, res) {
    console.log("Pinged my createThoughts route!")
    try { 
      const thoughtData = await Thought.create(req.body) 
      const userUpdate = await User.findOneAndUpdate({_id: req.body.userId}, {$push: {thoughts: thoughtData._id}})
      res.json(thoughtData)
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

    //await user.deleteMany({ _id: { $in: thought.users } });
    res.json({ message: 'thought and users deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
},
};

