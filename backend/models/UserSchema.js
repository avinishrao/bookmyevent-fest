const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    gmail:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required : true
    },
    appleId:{
        type:String,
        required : true
    },
    mobile:{
        type:String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('user', userSchema)