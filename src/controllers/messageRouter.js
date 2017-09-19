// messageRouter.js - Messages route module

// Load required packages
let express = require('express');
let Message = require('../models/message');
let User = require('../models/user');

// Create our Express router
let router = express.Router();

// // Require controller modules
// let message_controller = require('../controllers/messageController');

// REGISTER MESSAGE ROUTES

// // Create endpoint /api/rooms/:room_id/messages for GET
// router.get('/rooms/:room_id/messages', function (req, res) {
//   Message.find().populate('authorName').exec(function(err, messages){
//     if (err)
//       res.send(err);
//
//       res.json(messages);
//   })
// })

// EXAMPLE
router.get('/rooms/:room_id/messages', function (req, res) {
  Message.find().populate('author').exec(function(err, users) {
    if (err) {
      res.send(err);
    }

      res.json(users);
  });
})

// router.get('/rooms/:room_id/messages', function (req, res, next) {
//   Message.find({})
//     .populate('authorName')
//       .then(res.json.bind(res))
//     .catch(next);
//   });


// router.route('/rooms/:room_id/messages')
//   .get(function(req, res){
//       Message.find()
//       .populate('authorName') // User.name
//       .exec(function(err, messages){
//         res.json(messages);
//       })


// Create endpoint /api/rooms/:room_id/messages for POSTS
router.post('/rooms/:room_id/messages', function(req, res) {
  // Create a new instance of the Message model
  let msg = new Message();

  // Set the message properties that came from the POST data
  msg.text = req.body.text;
  msg.author = req.body.author_id;

  // Save the message and check for errors
  msg.save(function(err) {
    if (err)
      res.send(err);

      res.json({ message: 'Message added !', data: msg });
  });
});

// // Create endpoint /api/rooms/:room_id/messages/:message_id for DELETE
// router.delete('/rooms/:room_id/messages/:message_id', function(req, res) {
//   // Use the Room model to find a specific room and remove it
//   Room.findByIdAndRemove(req.params.room_id, function(err) {
//     if (err)
//       res.send(err);
//
//     res.json({ message: 'Message removed!' });
//   });
// });


module.exports = router
