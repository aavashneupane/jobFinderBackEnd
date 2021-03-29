const job = require("../models/jobmodel");
const applyjob = require("../models/applymodel");
const user = require('../models/user')
class applyJobController {

    applyJob(req, res) {

        const userid = req.user;
        const jobid = req.params.id;
        // const a=job.findOne({_id : jobid})


        const jobdata = new applyjob({

            userid: userid,
            jobid: jobid


        });
        jobdata.save()
            .then(function (result) {
                res.status(201).json({ message: "Job has been applied" });

            })
            .catch(function (err) {
                res.status(500).json({ message: err });
            });
    }


    showStatus(req, res) {
        const userid = req.user;
        const appliedid = req.params.id;
        const confirmStatus = req.params.confirmStatus;
        applyjob.findOne({
            _id: appliedid,

        })
            .then(function (data) {
                res.status(200).json(data.confirmStatus);
            })
            .catch(function (e) {
                res.status(500).json({ message: e })
            })
    }
    approveJob(req, res) {

       
        const confirmStatus = req.body.confirmStatus;
        const appliedid=req.body._id;
        // const a=job.findOne({_id : jobid})
        applyjob.findOneAndUpdate({_id:appliedid},{confirmStatus:confirmStatus})
            .then(function (result) {
                res.status(201).json({ message: "applied status has been updated" });

            })
            .catch(function (err) {
                res.status(500).json({ message: err });
            });
        }

    showMyApplied(req, res){
        const userid=req.user;
        applyjob.find({
            userid:userid
        })
        .then(function (data) {
            res.status(200).json(data);
            // console.log("applied is "+data.userid);
        })
        .catch(function (e) {
            res.status(500).json({ message: e })
        })
        
    }

//for company
showMyListings(req, res){
    const jobid=req.jobid;
    const userid=req.user;
    job.find({
        creator:userid
    })
    .then(function (data) {
        res.status(200).json(data);
        // console.log("applied is "+data.userid);
    })
    .catch(function (e) {
        res.status(500).json({ message: e })
    })
    
}

}


module.exports = applyJobController;
