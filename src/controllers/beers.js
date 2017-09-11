// beers.js - Beers route module
/* FOR TESTING - REMOVE THIS LATER */

// Load required packages
var express = require('express');
var Beer = require('../models/beer');

// Create our Express router
var router = express.Router();


// REGISTER BEER ROUTES

// Create endpoint /api/beers for GET
router.get('/beers', function (req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  Beer.find(function(err, beers) {
    if (err)
      res.send(err);

      res.json(beers);
    });
})

// Create endpoint /api/beers for POSTS
router.post('/beers', function(req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // Create a new instance of the Beer model
  var beer = new Beer();

  // Set the beer properties that came from the POST data
  beer.name = req.body.name;
  beer.type = req.body.type;
  beer.quantity = req.body.quantity;

  // Save the beer and check for errors
  beer.save(function(err) {
    if (err)
      res.send(err);

      res.json({ message: 'Beer added to the locker!', data: beer });
    });
  });


// Create endpoint /api/beers/:beer_id for GET
router.get('/beers/:beer_id', function(req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // Use the Beer model to find a specific beer
  Beer.findById(req.params.beer_id, function(err, beer) {
    if (err)
      res.send(err);

      res.json(beer);
    });
  });


// Create endpoint /api/beers/:beer_id for PUT
router.put('/beers/:beer_id', function(req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // Use the Beer model to find a specific beer
  Beer.findById(req.params.beer_id, function(err, beer) {
    if (err)
      res.send(err);

    // Update the existing beer quantity
    beer.quantity = req.body.quantity;

    // Save the beer and check for errors
    beer.save(function(err) {
      if (err)
        res.send(err);

      res.json(beer);
    });
  });
});


// Create endpoint /api/beers/:beer_id for DELETE
router.delete('/beers/:beer_id', function(req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // Use the Beer model to find a specific beer and remove it
  Beer.findByIdAndRemove(req.params.beer_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer removed from the locker!' });
  });
});



module.exports = router
