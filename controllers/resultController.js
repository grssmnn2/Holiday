const db=require("../models")
module.exports={
    getResults: (req,res)=>{
        db.listing.find({state:req.params.state}).then(dbresult=>{
            res.json(dbresult)
        })
    }
}