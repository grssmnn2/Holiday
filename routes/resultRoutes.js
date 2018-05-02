const router=require("express").Router();
const resultRoutes=require("../controllers/resultController");
router.post("/results/:city",resultRoutes.getResults)

module.exports=router;