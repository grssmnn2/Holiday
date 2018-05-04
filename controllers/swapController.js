const db=require("../models")
module.exports={
    createRequest:(req,res)=>{
        db.swap.create(req.body).then(dbresult=>{
            res.json(dbresult)
        })
    },
   retreievePendingTrips: (req,res)=>{
       console.log(req.params.user)
        db.swap.find({sender:req.params.user, confirmed:false}).then(dbresult=>{
            res.json(dbresult)
        })
    },
    retreiveSwapRequests: (req,res)=>{
        db.swap.find({receiver:req.params.user, confirmed:false}).then(dbresult=>{
            res.json(dbresult)
        })
    },
    retrieveUpcomingTrips: (req,res)=>{
        db.swap.find({$or: [{sender:req.params.user,confirmed:true,complete:false},
            {receiver:req.params.user,confirmed:true,complete:false}
           ]}).then(dbresult=>{
            res.json(dbresult)
        })
    },
    retrieveCompleteTrips: (req,res)=>{
        db.swap.find({$or: [{sender:req.params.user,complete:true},
            {receiver:req.params.user,complete:true}
           ]}).then(dbresult=>{
            res.json(dbresult)
        })
    },
    confirmTrip:(req,res)=>{
        db.swap.findOneAndUpdate().then(dbresult=>{
            res.json(dbresult)
        })
    },
    completeTrip:(req,res)=>{
        db.swap.findByIdAndUpdate({_id:req.params.id},{complete:true},{new:true})
        .then(result=>{
            res.json(result)
        })
    }


}