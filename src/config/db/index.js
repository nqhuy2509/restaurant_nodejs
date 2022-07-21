const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/restaurant')
        console.log('Connect successfully!!!!')
    }catch(err){
        console.log('Connect failure!!!')
    }
}

module.exports = {connect}