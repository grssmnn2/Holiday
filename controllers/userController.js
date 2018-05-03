const db=require("../models")
module.exports={
    createNewUser: (req,res)=>{
        db.listing.create(req.body).then(dbnewUser=>{
            res.json(dbnewUser)
        })
    },
    updateUserData:(req,res)=>{
        db.listing.findOneAndUpdate({email:req.params.email},{$set:req.body},{new:true})
        .then(dbuser=>{
            res.json(dbuser)
        })
    }
}