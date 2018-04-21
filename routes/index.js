const router=require("express").Router();
const messageRoutes=require("./messageRoutes");

router.use("/api", messageRoutes)
module.exports= router;