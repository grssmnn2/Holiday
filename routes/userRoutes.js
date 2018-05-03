const router=require("express").Router();
const userRouters=require("../controllers/userController");
router.post("/newUser",userRouters.createNewUser)
router.put("/userinfor/:email",userRouters.updateUserData)
module.exports=router;