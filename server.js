const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const routes=require("./routes")
const mongoose = require('mongoose');
const users={};
<<<<<<< HEAD
const aws=require("aws-sdk");
const mongoose = require("mongoose");
=======
>>>>>>> master

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
const getTime = (date)=>{
	return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}
const io=require("socket.io").listen(app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
}));

// --- Database configuration with Mongoose ---
var databaseUri = 'mongodb://localhost/holiday';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ' + err);
});

db.once('open', function() {
  console.log('Mongoose connection successful 🎉');
});


io.on("connection",socket=>{
  socket.on("NEW_USERS",data =>{
    console.log(data.sender)
    socket.name=data.sender
    users[socket.name]=socket
  })
  socket.on("SEND_MESSAGE", (data) =>{
    console.log(data.sender)
    console.log(data.receiver)
    const msgObj={
      name:data.sender,
      receiver:data.receiver, 
      messages:data.messages,
      time:getTime(new Date(Date.now()))
    }
    users[data.receiver].emit("RECEIVE_MESSAGE", msgObj)
    users[data.sender].emit("RECEIVE_MESSAGE",msgObj)
  })
  socket.on("disconnect",data =>{
    if(!socket.name) return;
    delete users[socket.name];
    console.log(users)
  })
})

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/logindb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
});