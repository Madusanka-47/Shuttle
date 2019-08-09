const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number,
        // required: true,
        
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
    /*,
    pickup_location: {
        longitude: {
            type: Number
        },
        latitude: {
            type: Number
        }
    },
    drop_location: {
        longitude: {
            type: Number
        },
        latitude: {
            type: Number
        }
    }*/

});

module.exports = mongoose.model('users', userSchema);