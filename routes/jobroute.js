const express = require('express');
const router = express.Router();///function
const jobmodel = require('../models/jobmodel');
const {check,validationResult} = require('express-validator');
const jobs = require('../models/jobmodel');
//const auth =require('../middleware/middleware');
const auth =require('../middleware/auth');


const jobController = require('../controllers/postJobController');
const applyJobController = require('../controllers/applyJobController');
const job = new jobController();
const jobapply = new applyJobController();

// add a job
router.post('/job/add',[

],auth.verifyUser,auth.verifyCompany,job.addJob)


//delete job   
router.delete('/job/delete/:pid',auth.verifyUser,auth.verifyCompany,job.deleteJob)


//update route
router.put('/job/update',auth.verifyUser,auth.verifyCompany,job.updateJob)


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

//to show single job
router.get('/job/showSingle/:id',auth.verifyUser,  job.getSinglejob);





//apply for a job 
router.post('/job/applyJob/:id',auth.verifyUser,auth.verifyCompany,jobapply.applyJob);
//show status of job
router.get('/job/showStatus/:id',auth.verifyUser,auth.verifyCompany||auth.verifyCustomer, jobapply.showStatus);



module.exports =router;



