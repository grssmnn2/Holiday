const router=require("express").Router();
const messageRoutes=require("./messageRoutes");
const userRoutes=require("./userRoutes");
const resultRoutes=require("./resultRoutes")
router.use("/api", messageRoutes)
router.use("/api",userRoutes)
router.use("/api",resultRoutes)
module.exports= router;

