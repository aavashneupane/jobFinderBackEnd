const mongoose = require('mongoose');
var User = require("./user");
//employees
const SCHEMA=mongoose.Schema;
const profileSchema =new SCHEMA({
  
    projects:{
    type:String
    },
    experience:{
        type:String
    },
    company:{
        type:String
    },
    foundedin:{
        type:Date
    },
    creator: {
        type: SCHEMA.Types.ObjectId,
        ref: User,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
    


})


const PROFILE = mongoose.model("profile", profileSchema);
module.exports = PROFILE;