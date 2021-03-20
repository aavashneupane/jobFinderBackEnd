const mongoose = require('mongoose');
const express = require('express');
const apiRouter = require('./routes/routes');
const bodyParser = require('body-Parser');

var app = express();
app.use(express.json());
const db = require('./database/db');
const jobroute = require('./routes/jobroute');



//app.use(jobroute);


app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/", apiRouter);
app.listen(91);