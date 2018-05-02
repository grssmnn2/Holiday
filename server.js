const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const routes=require("./routes")
const mongoose = require('mongoose');
const users={};
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


io.on("connection",socket=>{
  socket.on("NEW_USERS",data =>{
    console.log(data.sender)
    socket.name=data.sender
    users[socket.name]=socket
  })
  socket.on("SEND_MESSAGE", (data,callback) =>{
   
    console.log(data.sender)
    console.log(data.receiver)
    const msgObj={
      name:data.sender,
      receiver:data.receiver, 
      messages:data.messages,
      time:getTime(new Date(Date.now()))
    }
    callback(msgObj)
    if(data.receiver in users){
      users[data.receiver].emit("RECEIVE_MESSAGE", msgObj)
    }
    
    users[data.sender].emit("RECEIVE_MESSAGE",msgObj)
  })
  socket.on("disconnect",data =>{
    if(!socket.name) return;
    delete users[socket.name];
  })
})


// // If deployed, use the deployed database. Otherwise use the local holiday database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/holiday";


// // Set mongoose to leverage built in JavaScript ES6 Promises
// // Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
});
