// rooms.js - Rooms route module

// Load required packages
let express = require('express');
let Room = require('../models/room');

// Create our Express router
let router = express.Router();


// REGISTER ROOM ROUTES

// Create endpoint /api/rooms for GET
router.get('/rooms', function (req, res) {
  Room.find(function(err, rooms) {
    if (err)
      res.send(err);

      res.json(rooms);
    });
})

// Create endpoint /api/rooms for POSTS
router.post('/rooms', function(req, res) {
  // Create a new instance of the Room model
  let room = new Room();

  // Set the room properties that came from the POST data
  room.name = req.body.name;

  // Save the room and check for errors
  room.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Room added !', data: room });
      }
    });
  });


// Create endpoint /api/rooms/:room_id for GET
router.get('/rooms/:room_id', function(req, res) {
  // Use the Room model to find rooms
  Room.findById(req.params.room_id, function(err, room) {
    if (err)
      res.send(err);

      res.json(room);
    });
  });


// Create endpoint /api/rooms/:room_id for PUT
router.put('/rooms/:room_id', function(req, res) {
  // Use the Room model to find a specific room
  Room.findById(req.params.room_id, function(err, room) {
    if (err)
      res.send(err);

    // Update values
    room.name = req.body.name;

    // Save the room and check for errors
    room.save(function(err) {
      if (err)
        res.send(err);

      res.json(room);
    });
  });
});


// Create endpoint /api/rooms/:room_id for DELETE
router.delete('/rooms/:room_id', function(req, res) {
  // Use the Room model to find a specific room and remove it
  Room.findByIdAndRemove(req.params.room_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Room removed!' });
  });
});



module.exports = router
