const router=require("express").Router();
const swapRoutes=require("../controllers/swapController");
router.get("/pending/:user",swapRoutes.retreievePendingTrips)
router.get("/request/:user",swapRoutes.retreiveSwapRequests)
router.get("/upcoming/:user",swapRoutes.retrieveUpcomingTrips)
router.get("/complete/:user",swapRoutes.retrieveCompleteTrips)
router.post("/newtrips/",swapRoutes.createRequest)
router.put("/completetrip/:id",swapRoutes.completeTrip),
router.put("/confirm/:id",swapRoutes.confirmTrip),
router.put("/addreview/:user",swapRoutes.addReview),
router.put("/updatestatus/:id",swapRoutes.updateRateStatus)
module.exports=router;