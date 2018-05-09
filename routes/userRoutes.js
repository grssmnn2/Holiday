const router=require("express").Router();
const userRouters=require("../controllers/userController");
router.post("/newUser",userRouters.createNewUser)
router.put("/userinfor/:email",userRouters.updateUserData)
router.put("/image/:email",userRouters.uploadImage)
router.get("/userInfor/:email",userRouters.retrieveUserData)
module.exports=router;