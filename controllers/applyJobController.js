const job = require("../models/jobmodel");
const applyjob = require("../models/applymodel");

class applyJobController {
       
    applyJob(req, res) {
        
        const userid=req.user;
        const jobid = req.params.id;
       // const a=job.findOne({_id : jobid})
        

        const jobdata = new applyjob({
        
            userid: userid,
            jobid:jobid,
        

        });
        jobdata.save()
            .then(function (result) {
                res.status(201).json({ message: "Job has been applied" });

            })
            .catch(function (err) {
                res.status(500).json({ message: err });
            });
    }

}

module.exports = applyJobController;
