const db = require("../models");
module.exports = {
  update: (req, res) => {
    db.messages
      .create(req.body)
      .then(dbmessages => {
        res.json(dbmessages);
      });
  },
  findAll: (req,res) =>{
    db.messages.find({
        $or: [{sender:req.params.sender,receiver:req.params.receiver},
       {sender:req.params.receiver,receiver:req.params.sender}
      ]})
    .sort({created: 1})
    .then(dbmessages =>{
      res.json(dbmessages)
    })
  },
  findFriendList:(req,res) =>{
    db.listing.findOne({email:req.params.user}).then(dbuser=>{
      res.json(dbuser)
    })
  },
  addFriend: (req,res) =>{
    console.log(req.params.userName,req.body.friendlist.email)
    db.listing.findOneAndUpdate({email:req.params.name},{$push:req.body},{new:true})
    .then(dbdata=>{
        return db.listing.findOneAndUpdate({email:req.body.friendlist.email},{$push:{friendlist:{name:req.params.userName,email:req.params.name}}},{new:true}).then(dbresult=>{
          res.json(dbdata)
        })
     
    })
  },
  unreadMessage:(req,res)=>{
    db.messages.find({receiver:req.params.email,read:false}).then(result=>{
      console.log(result)
      res.json(result)
    });
  },
  updateMessage:(req,res)=>{
    db.messages.updateMany({sender:req.params.email,receiver:req.body.data},{read:true},{new:true}).then(data=>{
      res.json(data)
    })
  }
};
