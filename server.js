const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const users={};
const aws=require("aws-sdk");
const mongoose = require("mongoose");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// app.use('/s3', require('react-dropzone-s3-uploader/s3router')({
//   bucket: 'holidayimage',                           // required
//   region: 'us-east-1',                            // optional
//   headers: {'Access-Control-Allow-Origin': '*'},  // optional
//   ACL: 'private',                                 // this is the default - set to `public-read` to let anyone view uploads
// }));
const getTime = (date)=>{
	return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}
const io=require("socket.io").listen(app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
}));

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
})

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/logindb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
});