const db = require("../models");
module.exports = {
  update: (req, res) => {
    db.messages
      .create(req.body)
      .then(dbmessages => {
        res.json(dbmessages);
      });
  },
  findAll: (req, res) => {
    db.messages.find({
        $or: [{
            sender: req.params.sender,
            receiver: req.params.receiver
          },
          {
            sender: req.params.receiver,
            receiver: req.params.sender
          }
        ]
      })
      .sort({
        created: 1
      })
      .then(dbmessages => {
        res.json(dbmessages)
      })
  },
  findFriendList: (req, res) => {
    db.listing.findOne({
      email: req.params.user
    }).then(dbuser => {
      res.json(dbuser)
    })
  },
  addFriend: (req, res) => {
    db.listing.findOneAndUpdate({
        email: req.params.name
      }, {
        $push: req.body
      }, {
        new: true
      })
      .then(dbdata => {
        res.json(dbdata)
      })
  },
  updateList: (req, res) => {
    db.listing
      .create(req.body)
      .then(dbmessages => {
        res.json(dbmessages);
      });
  }
};