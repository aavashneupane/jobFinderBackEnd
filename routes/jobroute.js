const express = require('express');
const router = express.Router();///function
const jobmodel = require('../models/jobmodel');
const {check,validationResult} = require('express-validator');
const jobs = require('../models/jobmodel');
//const auth =require('../middleware/middleware');
const auth =require('../middleware/auth');


const jobController = require('../controllers/postJobController');
const job = new jobController();

// add a job
router.post('/job/add',[

],auth.verifyUser,auth.verifyCompany,job.addJob)


//delete job   
router.delete('/job/delete/:pid',auth.verifyUser,auth.verifyCompany,job.deleteJob)


//update route
router.put('/job/update',function(req, res){

    
    const jobtitle = req.body.jobtitle;
    const jobtype = req.body.jobtype;
    const jobdescription=req.body.jobdescription;
    const requiredexperience= req.body.requiredexperience;
    const jobprice = req.body.jobprice;
    const id =req.body._id;

    jobs.updateOne({_id:id},{jobtitle:jobtitle,jobtype:jobtype,jobdescription:jobdescription,requiredexperience:requiredexperience,jobprice:jobprice})
    .then(function(result){
        res.status(200).json({message:"Job has been updated"})
    })
    .catch(function(err){
        res.status(500).json({message:err})
    })


})


//get apii

router.get('/job/showall',function(req, res){
jobs.find()
.then(function(result){
    res.status(200).json(result)
})
.catch(function(err){
    res.status(500).json({message:err})
})


})

router.get('/job/show/:id',function(req, res){

    const id =req.params.id;

    jobs.findOne({_id:id})
    .then(function(result){
        res.status(200).json(result)
    })
    .catch(function(err){
        res.status(500).json({message:err})
    })
    
    
    })






module.exports =router;



