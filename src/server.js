// server.js The routing and Mongoose back end

// Load required packages
const http = require("http");
const express = require("express");
const cors = require("cors");
const io = require("socket.io");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Get ports from a config file
const config = require("./config/config.json");

// Connect to the backend, MongoDB
mongoose.connect('mongodb://localhost:27017/lsbackend');

// Create our Express application
const app = express();

// Setup server
const server = http.createServer(app);
const socketIo = io(server);

// cross origin (domain) requests
app.use(cors());

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// config port or 4200
const port = config.port || 4200;

// Create our Express router
const router = express.Router();

// Dummy route for testing
// http://localhost:4200/api
router.get('/', function(req, res) {
  res.json({ message: 'Root of REST API!' });
});

// Register all our routes with /api
app.use('/api', router);

// Register user routes
const user = require('./controllers/usersRouter.js')
app.use('/api/', user)

// Register room routes
const room = require('./controllers/roomsRouter.js')
app.use('/api/', room)

// Register message routes
const message = require('./controllers/messageRouter.js')
app.use('/api/', message)


// Start the server
app.listen(port);
console.log('Backend listening on port ' + port);
