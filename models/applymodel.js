var mongoose = require('mongoose');
var User = require("./user");
var Job = require("./jobmodel");
var SCHEMA=mongoose.Schema;

//jobs
const applySchema =new SCHEMA({
    userid: {
        type: SCHEMA.Types.ObjectId,
        ref: User
    },
    jobid: {
        type: SCHEMA.Types.ObjectId,
        ref: Job
    },
    confirmStatus:{
    type:String,
    default: "false"
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
});


const APPLY= mongoose.model("applied",applySchema);   
module.exports = APPLY;