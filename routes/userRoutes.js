const router=require("express").Router();
const userRouters=require("../controllers/userController");
router.post("/newUser",userRouters.createNewUser)
router.put("/userinfor/:email",userRouters.updateUserData)
router.put("/image/:email",userRouters.uploadImage)
router.get("/userInfor/:email",userRouters.retrieveUserData)
router.post("/favorites/:email",userRouters.addTofavorites)
router.put("/favorites/:email/:emailWillDelete",userRouters.removeFavorites)
module.exports=router;