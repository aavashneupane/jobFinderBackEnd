const express = require('express');
const router = express.Router();///function
const user = require('../models/user');
const bcrypt=require("bcryptjs");
const {check,validationResult} = require('express-validator');



//register api
router.post('/user/add',
[
    //validation
check('firstname',"First Name must be entered").not().isEmpty(),
check('lastname',"Last Name must be entered").not().isEmpty(),
check('email',"Invalid Email").isEmail(),
check('password',"Invalid Password").not().isEmpty(),
check('address',"Address must be entered").not().isEmpty(),
check('age',"Invalid age").isNumeric()
//check('phone',"Invalid Phone").isNumeric,
// check('firstname',"First Name must be entered").not().isEmpty
],
    function(req, res){

        const errors=validationResult(req);
console.log(errors.array());

if(!errors.isEmpty()){
res.send(errors.array());
}
else{
    const me = new user(req.body);
        me.save();
}
    
    });






module.exports = router;