const mongoose = require('mongoose')

const Schema = mongoose.Schema
const OrderSchema = new Schema({
    name: String,
    province: String,
    district: String,
    ward: String,
    street:String,
    phone: String,
    note: String,
    menu: String,
    amount: Number,
    price: Number,
    status: String
},{
    timestamps: true
})

module.exports = mongoose.model('Order', OrderSchema)