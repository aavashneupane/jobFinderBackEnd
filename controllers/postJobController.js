const job = require("../models/jobmodel");

class jobController {
  //to add a job
  addJob(req, res) {
    
    if(req.file==undefined){
      return res.status()
    }
    const jobtitle = req.body.jobtitle;
    const jobtype = req.body.jobtype;
    const jobdescription = req.body.jobdescription;
    const requiredexperience = req.body.requiredexperience;
    const jobprice = req.body.jobprice;
    const creator = req.user;
    const path = req.file.path;

    const jobdata = new job({
      jobtitle: jobtitle,
      jobtype: jobtype,
      jobdescription: jobdescription,
      requiredexperience: requiredexperience,
      jobprice: jobprice,
      photo: path,
      creator: creator,
    });
    jobdata
      .save()
      .then(function (result) {
        res.status(201).json({ message: "Job has been added" });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  //to delete a job
  deleteJob(req, res) {
    const pid = req.params.pid;
    job
      .deleteOne({ _id: pid })
      .then(function (result) {
        res.status(200).json({ message: "Job has been deleted" });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  //to update a job
  updateJob(req, res) {
    const jobtitle = req.body.jobtitle;
    const jobtype = req.body.jobtype;
    const jobdescription = req.body.jobdescription;
    const requiredexperience = req.body.requiredexperience;
    const jobprice = req.body.jobprice;
    const id = req.body.id;

    job
      .updateOne(
        { _id: id },
        {
          jobtitle: jobtitle,
          jobtype: jobtype,
          jobdescription: jobdescription,
          requiredexperience: requiredexperience,
          jobprice: jobprice,
        }
      )
      .then(function (result) {
        res.status(200).json({ message: "Job has been updated" });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }
  //to show a job
  getSinglejob(req, res) {
    const id = req.params.id;
    job.findOne({ _id: id })
    .populate('creator')
      .then(function (data) {
        res.status(200).json({success: true,data: data});
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

//to show a jobweb
getSinglejob2(req, res) {
  const id = req.params.id;
  job.findOne({ _id: id })
  .populate('creator')
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (e) {
      res.status(500).json({ message: e });
    });
}


}

module.exports = jobController;
