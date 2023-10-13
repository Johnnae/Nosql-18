const { Thought, User } = require('../models');

module.exports = {
  // Get all courses
  async getThoughts(req, res) {
    console.log("Pinged my getThoughts route!")
    try {
      res.json("Got Thoughts!")
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course

  // Create a course
  async createThought(req, res) {
    console.log("Pinged my createThoughts route!")
    try {
      res.json("Need to create Thought!")
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a course

  // Update a course
  
};

