const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const swapSchema=new Schema({
    sender:{
        type:String,
        require:true,
    },
    receiver:{
        type:String,
        require:true
    },
    start:{
        type:String
    },
    end:{
        type:String
    },
    confirmed:{
        type:Boolean,
        default:false
    },
    complete:{
        type:Boolean,
        default:false
    }
})

var swap = mongoose.model("swap",swapSchema)
module.exports =swap;