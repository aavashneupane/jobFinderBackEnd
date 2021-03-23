const express = require('express');
const router = express.Router();///function
const user = require('../models/user');
const tokenVerification = require('../middleware/auth');
const bcrypt=require("bcryptjs");
const {check,validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const upload = require('../middleware/uploads');
const authController = require('../controllers/authController')
const userController = require('../controllers/userController');


const auth = new authController();
const token = tokenVerification.verifyUser;

//register api
router.post('/user/add', [
    check('firstname',"First Name must be entered").not().isEmpty(),
    check('lastname',"Last Name must be entered").not().isEmpty(),
    check('email',"Invalid Email").isEmail(),
    check('password', "You must enter your password").not().isEmpty(),
    check('phone', "Invalid Phone Number!!!").isMobilePhone(),
    check('address',"Address must be entered").not().isEmpty(),
    check('age',"Invalid age").isNumeric(),
    check('password', "it must be 8 to 16 length long").isLength({ min: 8, max: 16 })],
    auth.register
);

//login api call
router.post('/user/login', auth.login)


//update route
// router.put('/user/update',auth.verifyUser,function(req, res){

//       const firstname=req.body.firstname;
//         const lastname=req.body.lastname;
//         const email=req.body.email;
//         const password=req.body.password;
//         const age=req.body.age;
//         const address=req.body.address;
//         const phone=req.body.phone;
//         const education=req.body.education;
//         const experience=req.body.experience;
//         const projects=req.body.projects;
//         const photo=req.body.photo;
//         const role=req.body.role;


//     const id =req.body.id;


//     jobs.updateOne({id:id},{firstname:firstname},{lastname:lastname},{email:email},
//         {password:password},{age:age},{address:address},{phone:phone},
//         {age:age},{education:education},{experience:experience},{projects:projects},{photo:photo},{role:role})
//     .then(function(result){
//         res.status(200).json({message:"User has been updated"})
//     })
//     .catch(function(err){
//         res.status(500).json({message:err})
//     })


// })



module.exports = router;


//