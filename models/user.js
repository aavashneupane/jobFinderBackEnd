const mongoose = require('mongoose');

//employees
const employees =mongoose.model('employees',{
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    address:{
        type: String
    },
        age:{
        type: Number
    },
    education:{
        type: String
    },
    experience:{
        type: String
    },
    projects:{
        
    }


})


    


})







module.exports = employees;