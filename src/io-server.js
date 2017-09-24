// io-server.js The Socket.IO back end

// Load required packages
const http = require("http");
const express = require("express");
const cors = require("cors");
const io = require("socket.io");

// Implement later, put ports here:
//import config from '../config/config.json';

// setup server
const app = express();
const server = http.createServer(app);

const socketIo = io(server);

// Allow CORS
app.use(cors());

// Render a API index page
app.get('/', (req, res) => {
  res.json({ message: 'Root of Socket.IO!' });
});

// Use environment defined port or 4200
const port = process.env.PORT || 4008;

// Start listening
server.listen(process.env.PORT || 4008);
console.log('Started on port ' + port);


// Setup socket.io
socketIo.on('connection', socket => {
  // const username = socket.handshake.query.username;
  // console.log('connected');

  socket.on('client:message', data => {
    // message received from client, now broadcast it to everyone else
    socket.broadcast.emit('server:message', data);
  });

  // socket.on('disconnect', () => {
  //   console.log('disconnected');
  // });
});
