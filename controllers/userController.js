const db=require("../models")
module.exports={
    createNewUser: (req,res)=>{
        db.listing.create(req.body).then(dbnewUser=>{
            res.json(dbnewUser)
        })
    }
}