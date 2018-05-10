const router = require("express").Router();
const messageController= require("../controllers/messageController")
router.post("/message/",messageController.update)
router.get("/historymessage/:sender/:receiver",messageController.findAll)
router.get("/friendlist/:user",messageController.findFriendList)
router.post("/friendlist/:name/:userName",messageController.addFriend)
router.get("/unread/:email",messageController.unreadMessage)
router.put("/updatemessage/:email",messageController.updateMessage)
module.exports=router;