var mongoose = require('mongoose');

// saving a reference to the schema constructor

var Schema = mongoose.Schema;

var listingSchema = new Schema ({
    title: {
        type: String
    },
    details: {
        type: String
    }, 
    username: {
        type: String
    }, 
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }
})