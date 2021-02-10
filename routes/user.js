const express = require('express');
const router = express.Router();///function
const user = require('../models/user');
const bcrypt=require("bcryptjs");
const {check,validationResult} = require('express-validator');
const auth =require('../middleware/middleware');
const jwt = require('jsonwebtoken');
const upload = require('../middleware/uploads');

//register api
router.post('/user/add',auth,


   upload.single('photo'),

    function(req, res,next) {


     console.log(req.file);
        const errors=validationResult(req);
        console.log(errors.array());

        if(!errors.isEmpty()){
        res.status(400).json(errors.array());
            
        }
        else{

        const firstname=req.body.firstname;
        const lastname=req.body.lastname;
        const email=req.body.email;
        const password=req.body.password;
        const age=req.body.age;
        const address=req.body.address;
        const phone=req.body.phone;
        const education=req.body.education;
        const experience=req.body.experience;
        const projects=req.body.projects;
        
        const photo=req.body.photo;
        const role=req.body.role;

        
        bcrypt.hash(password,10,function(err,hash){
          //  console.log(hash)
            const me =new user({
                firstname:firstname,lastname:lastname,email:email,password:hash,age:age,address:address,phone:phone,age:age,education:education,experience:experience,projects:projects,photo:req.file.path,role:role
            });

            me.save()
            .then(function(result){
                //insert success
                res.status(201).json({message:"User registration successfull"});
            })
            .catch(function(e){
                res.status(500).json({message:e})

            });
        })


        


        }

        });


//login api call
router.post('/user/login',function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    user.findOne({email:email})
    .then(function(employeedata){
        if(employeedata===null){
        return res.status(403).json({message:"Email or password Invalid"})
        }

        bcrypt.compare(password, employeedata.password,function(err,result){

            if(result===false){
                return res.status(403).json({message:"Email or password Invalid"})
            }

            //user is validated
         //   res.send("Authenticated")

            const token=jwt.sign({userId:employeedata._id},'secretkey' );
            //res.send(token);
            res.status(200).json({
                message:"login success",
                token:token
            })



        })

    })
    .catch(function(e){console.log(e)})

})


// //update route
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