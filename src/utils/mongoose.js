
module.exports = {
    multiMg2Obj(mongooses){
        return mongooses.map(mongoose=> mongoose.toObject())
    },

    mg2Obj(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}