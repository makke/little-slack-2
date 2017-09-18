// messageRouter.js - Messages route module

// Load required packages
let express = require('express');
let Message = require('../models/message');

// Create our Express router
let router = express.Router();


// REGISTER MESSAGE ROUTES

// Create endpoint /api/rooms/:room_id/messages for GET
router.get('/rooms/:room_id/messages', function (req, res) {
  Message.find(function(err, messages) {
    if (err)
      res.send(err);

      res.json(messages);
  });
})


// Create endpoint /api/rooms/:room_id/messages for POSTS
router.post('/rooms/:room_id/messages', function(req, res) {
  // Create a new instance of the Message model
  let msg = new Message();

  // Set the message properties that came from the POST data
  msg.author = req.body.author;
  msg.text = req.body.text;

  // Save the message and check for errors
  msg.save(function(err) {
    if (err)
      res.send(err);

      res.json({ message: 'Message added !', data: msg });
  });
});


module.exports = router
