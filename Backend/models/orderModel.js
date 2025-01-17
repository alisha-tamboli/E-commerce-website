const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    desc : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    }

}, {timestamps: true } );

module.exports = mongoose.model('Order', orderSchema)