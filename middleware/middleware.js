const {check,validation}=require('express-validator');

const auth = function(req, res, next) {


        //validation
check('firstname',"First Name must be entered").not().isEmpty(),
check('lastname',"Last Name must be entered").not().isEmpty(),
check('email',"Invalid Email").isEmail(),
check('password',"Invalid Password").not().isEmpty(),
check('address',"Address must be entered").not().isEmpty(),
check('age',"Invalid age").isNumeric()
//check('phone',"Invalid Phone").isNumeric,
// check('firstname',"First Name must be entered").not().isEmpty

next();


}
module.exports =auth



