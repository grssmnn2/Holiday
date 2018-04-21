const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const messagesSchema=new Schema({
    conversationName:{
        type:String,
        required:true,
        unique:true
    },
    conversation:[{
        type:String
    }]
       

})

var messages = mongoose.model("messages",messagesSchema)
module.exports =messages;