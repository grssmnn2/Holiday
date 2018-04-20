const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const users={};
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
  socket.on("disconnect",data =>{
    if(!socket.name) return;
    delete users[socket.name];
    console.log(users)
  })
})
