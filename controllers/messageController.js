const db = require("../model");
const update = { expire: new Date() };
const options = { upsert: true, new: true, setDefaultsOnInsert: true };
module.exports = {
  update: (req, res) => {
    db.messages
      .findOneAndUpdate({ conversationName: req.body }, update, options)
      .then(dbmessages => {
        res.json(dbmessages);
      });
  }
};
