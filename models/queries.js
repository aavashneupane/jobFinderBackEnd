var mongoose = require("mongoose");
var User = require("./user");

var SCHEMA = mongoose.Schema;

//jobs
const queriesSchema = new SCHEMA({
    userid: {
        type: SCHEMA.Types.ObjectId,
        ref: User,
        default:'6055e7e6c8fffb1cf89ac021'
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    
    email: {
        type: String,
    },
    query: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const QUERY = mongoose.model("queries", queriesSchema);
module.exports = QUERY;
