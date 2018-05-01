const router=require("express").Router();
const messageRoutes=require("./messageRoutes");
const userRoutes=require("./userRoutes");
router.use("/api", messageRoutes)
router.use("/api",userRoutes)
module.exports= router;