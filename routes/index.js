const router=require("express").Router();
const messageRoutes=require("./messageRoutes");
const userRoutes=require("./userRoutes");
const resultRoutes=require("./resultRoutes")
const swapRoutes=require("./swapRoutes")
router.use("/api", messageRoutes)
router.use("/api",userRoutes)
router.use("/api",resultRoutes)
router.use("/api",swapRoutes)
module.exports= router;

