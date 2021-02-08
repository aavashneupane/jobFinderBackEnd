const express = require('express');
const router = express.Router();///function
const jobmodel = require('../models/jobmodel');
const {check,validationResult} = require('express-validator');
const jobs = require('../models/jobmodel');
//const auth =require('../middleware/middleware');
const auth =require('../middleware/auth');


router.post('/job/insert',auth.verifyUser,function(req, res){

    const jobtitle = req.body.jobtitle;
    const jobtype = req.body.jobtype;
    const jobdescription=req.body.jobdescription;
    const requiredexperience= req.body.requiredexperience;
    const jobprice = req.body.jobprice;

    const jobdata =new jobmodel({jobtitle:jobtitle, jobtype:jobtype, 
                                jobdescription:jobdescription,
                                 requiredexperience:requiredexperience, 
                                 jobprice:jobprice});
    jobdata.save()
    .then(function(result){
        res.status(201).json({message:"Job has been added"})
    })
    .catch(function(err){
        res.status(500).json({message:err})
    });

})

//delete job   
router.delete('/job/delete/:pid',auth.verifyUser,function(req, res){
    const pid = req.params.pid;
    jobs.deleteOne({_id:pid})
    .then(function(result){
        res.status(200).json({message:"Job has been deleted"})
    })
    .catch(function(err){
        res.status(500).json({message:err})
    })

})


//update route
router.put('/job/update/:pid',auth.verifyUser,function(req, res){

    const jobtitle = req.body.jobtitle;
    const jobtype = req.body.jobtype;
    const jobdescription=req.body.jobdescription;
    const requiredexperience= req.body.requiredexperience;
    const jobprice = req.body.jobprice;

    const id =req.body.id;

    // const jobdata =new jobmodel({jobtitle:jobtitle, jobtype:jobtype, 
    //                             jobdescription:jobdescription,
    //                              requiredexperience:requiredexperience, 
    //                              jobprice:jobprice});

    jobs.updateOne({_id:id},{jobtitle:jobtitle},{jobtype:jobtype},{jobdescription:jobdescription},{requiredexperience},{jobprice})
    .then(function(result){
        res.status(200).json({message:"Job has been updated"})
    })
    .catch(function(err){
        res.status(500).json({message:err})
    })


})










module.exports =router;



