let mongoose = require('mongoose')

// Defining Login collection structure or schema

let structure = mongoose.Schema(

    {
        fullName : String,
        user : String,
        mobile : Number,
        address : String,
        city : String,
        pincode : Number,
        userId : String,
        password : String
    }

)

let createCollection = mongoose.model("user_signUps",structure);

module.exports = createCollection;