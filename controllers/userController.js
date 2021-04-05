const queries = require("../models/queries");
const user = require("../models/user");

class userController {
  //to add a job
  addQuery(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const query = req.body.query;
    const creator = req.user;

    const jobdata = new job({
      firstname: firstname,
      lastname: lastname,
      email: email,
      query: query,
      creator: creator,
    });
    jobdata
      .save()
      .then(function (result) {
        res.status(201).json({ message: "Your feddback has been sent to the admin." });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  
}

module.exports = userController;
