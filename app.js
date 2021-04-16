const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');
// const path = require('path');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/images',express.static(__dirname+'/images'));


app.use(cors());


const db = require("./database/db");
const user = require("./routes/user");
const profileRoute = require("./routes/profileRoute");
const jobroute = require("./routes/jobroute");
const extraRoute = require("./routes/extraRoute");

app.use(user);
app.use(profileRoute);
app.use(jobroute);
app.use(extraRoute);

app.listen(91, () => {
  console.log("Server running at 91.");
});
