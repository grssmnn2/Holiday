const router=require("express").Router();
const userRouters=require("../controllers/userController");
router.post("/newUser",userRouters.createNewUser)

module.exports=router;