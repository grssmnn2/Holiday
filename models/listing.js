var mongoose = require('mongoose');

// saving a reference to the schema constructor

var Schema = mongoose.Schema;

var listingSchema = new Schema ({
    email: {
        type: String,
        required:true
    },
    name: {
        type: String
    }, 
    imageLink:[{
        link:String
    }],
    friendlist:[{
        name:String,
        email:String
    }],
    address: {
        type: String
    },
    city: {
        type: String
    }, 
    state: {
        type: String
    }, 
    country: {
        type: String
    },
    geocode:{
        type:Object
    },
    zip: {
        type: String
    },  
    pets: {
        type:String
    },
    bathroom: {
        type: String
    }, 
    bedroom: {
        type: String
    },
    guest: {
        type: String
    },  
    wifi: {
        type:String
    },
    rating:{
        type:Number,
        default:5
    },
    numberOfRatings:{
        type:Number,
        default:1
    },
    date:{
        type: String
    },
    description:{
        type: String
    },
    review:[{
        name:String,
        content:String,
        score:Number
    }],
    favorites:[{
        name:String,
        link:String,
        email:String
    }]
})
var listing = mongoose.model("listing",listingSchema)
module.exports =listing;