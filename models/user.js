const mongoose = require('mongoose');

//employees
const registration =mongoose.model('user',{
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true        
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String
        ,
        required: true
    },
    address:{
        type: String,
        required: true

    },
    phone:{
        type: String
    },
    age:{
    type: Number,
    required: true

    },
    photo:{
        type: String
    },
    role:{
    
    type: String,
    enum:['Company','Customer','Admin'],
    default:'Customer'

},
    createdAt: {
    type: Date,
    default: Date.now,
  }
    


})



module.exports = registration;