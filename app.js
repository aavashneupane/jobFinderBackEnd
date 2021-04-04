const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static("./images"));

app.use(express.json());


app.use(cors());
const db = require("./database/db");
const user = require("./routes/user");
const profileRoute = require("./routes/profileRoute");
const jobroute = require("./routes/jobroute");

app.use(user);
app.use(profileRoute);
app.use(jobroute);

app.listen(91, () => {
  console.log("Server running at 91.");
});
