var mongoose = require('mongoose');
var config = require('./../config');

var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
        required: true,
    },
    lng: {
        type: String,
        require: true
    }
    // deleted: {
    //     type: Boolean,
    //     // required: true,
    //     default: 0
    // },
    // createdDate: {
    //     type: Date
    // },
    // createBy: {
    //     type: String
    // },
    // modifiedDate: {
    //     type: Date
    // },
    // modifiedBy: {
    //     type: String
    // }
});

var Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;