const { User, Thought } = require('../models');

module.exports = {
  // Get all courses
  async getUsers(req, res) {
    console.log("Pinged my getUsers route!")
    try {
      res.json("Got Users!")
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a course

  // Create a course
  async createUser(req, res) {
    console.log("Pinged my createUsers route!")
    try {
      res.json("Need to create Users!")
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a course

  // Update a course
  
};

