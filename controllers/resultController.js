const db=require("../models")
module.exports={
    getResults: (req,res)=>{
        db.listing.find({city:req.params.city}).then(dbresult=>{
            res.json(dbresult)
        })
    }
}