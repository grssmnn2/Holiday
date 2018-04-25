const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const friendSchema=new Schema({
    user:{
        type:String,
        require:true,
    },
    friends:[{
        type:String
    }]
       

})

var friendlist = mongoose.model("friendlist",friendSchema)
module.exports =friendlist;