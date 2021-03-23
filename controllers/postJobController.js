const job = require("../models/jobmodel");

class jobController {
    //to add a job
    addJob(req, res) {
        const jobtitle = req.body.jobtitle;
        const jobtype = req.body.jobtype;
        const jobdescription = req.body.jobdescription;
        const requiredexperience = req.body.requiredexperience;
        const jobprice = req.body.jobprice;

        const jobdata = new jbmodel({
            jobtitle: jobtitle,
            jobtype: jobtype,
            jobdescription: jobdescription,
            requiredexperience: requiredexperience,
            jobprice: jobprice,
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
}

module.exports = jobController;
