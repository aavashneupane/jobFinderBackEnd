const Job = require("../models/jobmodel");
const Validation = require("../request/validation");

class JobController {
  async newJob(request, response) {
    const result = Validation.JOB(request.body);

    if (result.error) {
      let error = result.error.details[0];
      response.status(422).json({
        success: false,
        error: { field: error.path[0], message: error.message },
      });
    } else if (
      await Job.dateExist(result.value.date, result.value.creator)
    ) {
      response.status(409).json({
        success: false,
        error: {
          field: "date",
          message: "Date already registered!",
        },
      });
    } else {
      try {
        let newJob = new Job(result.value);
        let saved = await newJob.save();
        let job = await saved.populate("creator").execPopulate();
        response.status(201).json({
          success: true,
          message: `job recorded!`,
          job: job,
        });
      } catch (error) {
        response.status(500).json({ success: false, error: error.message });
      }
    }
  }


}

module.exports = new JobController();
