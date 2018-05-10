const router=require("express").Router();
const resultRoutes=require("../controllers/resultController");
router.get("/results/:state",resultRoutes.getResults)

module.exports=router;