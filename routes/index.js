const router=require("express").router;
const messageRoutes=require("./messageRoutes");

router.use("/api", messageRoutes)
module.exports= router;