const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-Parser');

const app = express();
app.use(express.json());
const db = require('./database/db');
const user = require('./routes/user');
const jobroute = require('./routes/jobroute');


app.use(user);
app.use(jobroute);

app.use(bodyParser.urlencoded({extended: false}));


app.listen(91);