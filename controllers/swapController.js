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
        db.swap.find({$or: [{sender:req.params.user,confirmed:true,senderComplete:false,receiverComplete:false},
            {sender:req.params.user,confirmed:true,senderComplete:true,receiverComplete:false},
            {sender:req.params.user,confirmed:true,senderComplete:false,receiverComplete:true},
            {receiver:req.params.user,confirmed:true,senderComplete:false,receiverComplete:false},
            {receiver:req.params.user,confirmed:true,senderComplete:true,receiverComplete:false},
            {receiver:req.params.user,confirmed:true,senderComplete:false,receiverComplete:true}
           ]}).then(dbresult=>{
            res.json(dbresult)
        })
    },
    retrieveCompleteTrips: (req,res)=>{
        db.swap.find({$or: [{sender:req.params.user,senderComplete:true,receiverComplete:true},
            {receiver:req.params.user,senderComplete:true,receiverComplete:true}
           ]}).then(dbresult=>{
            res.json(dbresult)
        })
    },
    confirmTrip:(req,res)=>{
        db.swap.findByIdAndUpdate({_id:req.params.id},{confirmed:true},{new:true}).then(dbresult=>{
            res.json(dbresult)
        })
    },
    completeTrip:(req,res)=>{
        db.swap.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(result=>{
            if(result.senderComplete===true&&result.receiverComplete===true){
            console.log(result)
            res.json("completed")
            }else{
                res.json("Please wait for the other user to complete the trip!")
            }
        })
    }


}