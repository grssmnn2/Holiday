const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const messagesSchema=new Schema({
    sender:{
        type:String,
        require:true,
    },
    receiver:{
        type:String,
        require:true
     
    },
    created: { 
        type: Date, 
        default: Date.now 
    },
    message:{
        type:String
    }
       

})

var messages = mongoose.model("messages",messagesSchema)
module.exports =messages;