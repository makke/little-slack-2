// io-server.js The Socket.IO back end

// Load required packages
const http = require("http");
const express = require("express");
const cors = require("cors");
const io = require("socket.io");

// Get ports from a config file
const config = require("./config/config.json");

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



// Start to config port or 4008
server.listen(config.portIO || 4008);
console.log('SocketIO started on port ' + config.portIO);

// Setup socket.io
socketIo.on('connection', socket => {
  // const username = socket.handshake.query.username;
  // console.log('connected');

  socket.on('room', function(room) {
    socket.join(room);

    socket.on('client:message', data => {
      // message received from client, now broadcast it to everyone else
      socket.broadcast.to(room).emit('server:message', data);
    });

  });

  // socket.on('disconnect', () => {
  //   console.log('disconnected');
  // });
});
