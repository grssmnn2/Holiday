const router = require("express").Router();
const messageController= require("../controllers/messageController")
router.post("/message/:id",messageController.update)

module.exports=router;