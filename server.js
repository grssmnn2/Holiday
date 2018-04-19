const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const users={};
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.use('/s3', require('react-s3-uploader/s3router')({
  bucket: "holidayimage",
  // region: 'us-east-1', //optional
  signatureVersion: 'v4', //optional (use for some amazon regions: frankfurt and others)
  headers: {'Access-Control-Allow-Origin': '*'}, // optional
  ACL: 'public', // this is default
  uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}));
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
    const msgObj={
      name:data.sender, 
      messages:data.messages,
      time:getTime(new Date(Date.now()))
    }
    users[data.receiver].emit("RECEIVE_MESSAGE", msgObj)
    users[data.sender].emit("RECEIVE_MESSAGE",msgObj)
  })
})
