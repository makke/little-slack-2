// users.js - users route module

// Load required packages
let express = require('express');
let User = require('../models/user');

// Create our Express router
let router = express.Router();


// REGISTER USER ROUTES

// Create endpoint /api/users for GET
router.get('/users', function (req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

      res.json(users);
    });
})

// Create endpoint /api/users for POSTS
router.post('/users', function(req, res) {
  // Create a new instance of the User model
  let user = new User();

  // Set the user properties that came from the POST data
  user.name = req.body.name;
  user.type = req.body.type;
  user.quantity = req.body.quantity;

  // Save the user and check for errors
  user.save(function(err) {
    if (err)
      res.send(err);

      res.json({ message: 'User added to the locker!', data: user });
    });
  });


// Create endpoint /api/users/:user_id for GET
router.get('/users/:user_id', function(req, res) {
  // Use the User model to find a specific user
  User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);

      res.json(user);
    });
  });


// Create endpoint /api/users/:user_id for PUT
router.put('/users/:user_id', function(req, res) {
  // Use the User model to find a specific user
  User.findById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);

    // Update the existing user quantity
    user.quantity = req.body.quantity;

    // Save the user and check for errors
    user.save(function(err) {
      if (err)
        res.send(err);

      res.json(user);
    });
  });
});


// Create endpoint /api/users/:user_id for DELETE
router.delete('/users/:user_id', function(req, res) {
  // Use the User model to find a specific user and remove it
  User.findByIdAndRemove(req.params.user_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'User removed from the locker!' });
  });
});



module.exports = router
