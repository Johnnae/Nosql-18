const { User, Thought } = require('../models');

module.exports = {
  // Get all user
  async getUser(req, res) {
    console.log("Pinged my getUsers route!")
    try { 
      const userData = await User.find({}).populate('thoughts')
      res.json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  

  // Create a user
  async createUser(req, res) {
    console.log("Pinged my createUsers route!")
    try { 
      const userData = await User.create(req.body)
      res.json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user 

  
  
};

