# WORK IN PROGRESS

## Little Slack

* My very first MERN -project, done for learning purposes (ie. MongoDB, Express, React and Node).

* I use Socket.IO for the real-time mesaaging

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installing

* You need Mongodb to run this app
* Clone the repo
* Install dependencies: "npm install"
* Run program: "npm start"
* (npm start will start both front- and backend)
* More instructions to follow...

## Separate Starting Commands

* "npm start" will start both the front end and all the back end servers
* "node src/server.js" will start only routing backend
* "node src/io-server.js" will start only socket.io backend

## Default ports and REST API

* You can change these ports in config/config.json
* Frontend will be as an default on http://localhost:3000/
* Backend will be as an default on http://localhost:4200/
* REST api can be found from http://localhost:4200/api/
* Socket.IO can be found at http://localhost:4008/

## Future Development - TODO

* Implement private messages between users
* Move all database action to the backend, it's leaking to the front
* Split code up to more general service components, to make it more DRY
* Comment the code better
* Fix refresh problem with sidebar
* Messages by deleted users cause error
* Consider using React Bootstrap?
