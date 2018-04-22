const router = require("express").Router();
const messageController= require("../controllers/messageController")
router.post("/message/",messageController.update)
router.get("/historymessage/:sender/:receiver",messageController.findAll)
module.exports=router;