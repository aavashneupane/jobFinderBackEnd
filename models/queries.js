var mongoose = require("mongoose");
var User = require("./user");

var SCHEMA = mongoose.Schema;

//jobs
const queriesSchema = new SCHEMA({
    userid: {
        type: SCHEMA.Types.ObjectId,
        ref: User,
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
