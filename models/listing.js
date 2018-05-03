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
    review:{
        type:String
    }
})
var listing = mongoose.model("listing",listingSchema)
module.exports =listing;