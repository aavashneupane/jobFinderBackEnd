const express = require('express');
const router = express.Router();///function
const user = require('../models/user');

router.post('/user', function(req, res){
    const me = new user(req.body);
    me.save();
});






module.exports = router;