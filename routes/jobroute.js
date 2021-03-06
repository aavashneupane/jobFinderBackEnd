const express = require("express");
const router = express.Router(); ///function
const jobmodel = require("../models/jobmodel");
const { check, validationResult } = require("express-validator");
const jobs = require("../models/jobmodel");
//const auth =require('../middleware/middleware');
const auth = require("../middleware/auth");
const upload = require("../middleware/uploads");

const jobController = require("../controllers/postJobController");
const applyJobController = require("../controllers/applyJobController");
const job = new jobController();
const jobapply = new applyJobController();
// const User= require('../models/User');

// add a job
router.post("/job/add", [],upload.single('photo'), auth.verifyUser, auth.verifyCompany, job.addJob);

//delete job
router.delete(
  "/job/delete/:pid",
  auth.verifyUser,
  job.deleteJob
);

//update route
router.put("/job/update/:id", job.updateJob);

//get apii

router.get("/job/showall", function (req, res) {
  jobs
    .find()
    .populate("creator")
    .then(function (data) {
      
      res.status(200).json({success: true, data});
    })
    .catch(function (err) {
      res.status(500).json({ message: err });
    });
});

router.get("/job/showall2", function (req, res) {
  jobs
    .find()
    .populate("creator")
    .then(function (data) {
      
      res.status(200).json(data);
    })
    .catch(function (err) {
      res.status(500).json({ message: err });
    });
});


//to show single job
router.get("/job/showSingle/:id", job.getSinglejob);
//to show single web
router.get("/job/showSingle2/:id", job.getSinglejob2);

//apply for a job
router.post("/job/applyJob/:pid", auth.verifyUser,auth.verifyCustomer, jobapply.applyJob);

//apply for a job2
router.post("/job/applyJob2/:pid", auth.verifyUser,auth.verifyCustomer, jobapply.applyJob2);

//show status of job
router.get(
  "/job/showStatus/:id",
  auth.verifyUser,
  auth.verifyCompany || auth.verifyCustomer,
  jobapply.showStatus
);


//show status of job
router.get(
  "/job/showStatus/:id",
  auth.verifyUser,
  auth.verifyCompany || auth.verifyCustomer,
  jobapply.showStatus
);

//verify applied status job
router.put(
  "/job/approveJob/:id",
  auth.verifyUser,
  auth.verifyCompany,
  jobapply.approveJob
);

//to show myapplied jobapply
router.get(
  "/job/showMyApplied",
  auth.verifyUser,
  auth.verifyCustomer,
  jobapply.showMyApplied
);

//web
router.get(
  "/job/showMyApplied2",
  auth.verifyUser,
  auth.verifyCustomer,
  jobapply.showMyApplied2
);




router.delete(
  "/job/deleteMyApplied/:pid",
  auth.verifyUser,
  jobapply.deleteMyApplied
);

router.get(
  "/job/showWhoApplied/:id",
  auth.verifyUser,
  auth.verifyCompany,
  jobapply.showWhoApplied
);

//to show mycompany listings
router.get(
  "/job/showMyListings",
  auth.verifyUser,
  auth.verifyCompany,
  jobapply.showMyListings
);

module.exports = router;
