const mongoose = require('mongoose');

//employees
const employees =mongoose.model('employees',{
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
    education:{
        type: String
    },
    experience:{
        type: String
    },
    projects:{
        type:String
    },
    photo:{
        type: String
    },
    role:{
    
    type: String,
    enum:['Employees','Employer','Admin'],
    default:'Customer'

}
    


})


    










module.exports = employees;