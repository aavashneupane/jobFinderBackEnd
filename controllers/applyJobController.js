const job = require("../models/jobmodel");
const applyjob = require("../models/applymodel");
const user = require("../models/user");
class applyJobController {
  applyJob(req, res) {
    const userid = req.user;
    const jobid = req.params.pid;
    // const a=job.findOne({_id : jobid})
    
    const jobdata = new applyjob({
      userid: userid,
      jobid: jobid,
    });
    jobdata
      .save()
      .then(function (result) {
        res.status(201).json({ message: "Job has been applied" });
        console.log("doneeeeeeeeeeeee")
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  showStatus(req, res) {
    const userid = req.user;
    const appliedid = req.params.id;
    const confirmStatus = req.params.confirmStatus;
    applyjob
      .findOne({
        _id: appliedid,
      })
      .then(function (data) {
        res.status(200).json(data.confirmStatus);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }
  approveJob(req, res) {
    const confirmStatus = req.body.confirmStatus;
    const appliedid = req.params.id;
    // const a=job.findOne({_id : jobid})
    applyjob
      .updateOne({ _id: appliedid }, { confirmStatus: confirmStatus })
      .then(function (result) {
        res.status(201).json({ message: "applied status has been updated" });
        console.log("Status changed"+result.confirmStatus)
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  showMyApplied(req, res) {
    const userid = req.user;
    applyjob
      .find({
        userid: userid,
      })
      .populate("userid")
      .populate("jobid")
      .then(function (data) {
        res.status(200).json(data);
        // console.log("applied is "+data.userid);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  deleteMyApplied(req, res) {
    const pid = req.params.pid;

    applyjob
      .deleteOne({
        _id: pid,
      })
      .then(function (data) {
        res.status(200).json(data);
        console.log("deleted successfully");
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  //for company
  showMyListings(req, res) {
    const jobid = req.jobid;
    const userid = req.user;
    job
      .find({
        creator: userid,
      })
      .then(function (data) {
        res.status(200).json(data);
        // console.log("applied is "+data.userid);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  showWhoApplied(req, res) {
    const jobid = req.params.id;
    const userid = req.user;
    applyjob
      .find({
        jobid: jobid,
      }).populate('userid')
      .then(function (data) {
        res.status(200).json(data);
        //console.log("applied is " + data);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }
}

module.exports = applyJobController;
