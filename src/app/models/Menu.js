const mongoose = require('mongoose')

const Schema = mongoose.Schema
const MenuSchema = new Schema({
    name: String,
    image: {
        data: String,
        contentType: String
    },
    description: String,
    status: String,
    price: Number,
},{
    timestamps: true
})

module.exports = mongoose.model('Menu', MenuSchema)