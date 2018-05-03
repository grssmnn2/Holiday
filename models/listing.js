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
        type:String
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
        type: Number
    },  
    pets: {
        type:Boolean
    },
    bathroom: {
        type: Number
    }, 
    bedroom: {
        type: Number
    },
    guest: {
        type: Number
    },  
    wifi: {
        type:Boolean
    }, 
    review:{
        type:String
    }
})
var listing = mongoose.model("listing",listingSchema)
module.exports =listing;