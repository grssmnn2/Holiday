const router=require("express").Router();
const resultRoutes=require("../controllers/resultController");
router.get("/results/:city",resultRoutes.getResults)

module.exports=router;