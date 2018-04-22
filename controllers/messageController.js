const db = require("../models");
<<<<<<< HEAD
=======
const update = { expire: new Date() };
>>>>>>> master
const options = { upsert: true, new: true, setDefaultsOnInsert: true };
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
  }
};
