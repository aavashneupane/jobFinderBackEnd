const queries = require("../models/queries");
const user = require("../models/user");

class userController {
  //to add a job
  addQuery(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const query = req.body.query;
    const userid = req.user;

    const querydata = new queries({
      firstname: firstname,
      lastname: lastname,
      email: email,
      query: query,
      userid: userid,
    });
    querydata
      .save()
      .then(function (result) {
        res.status(201).json({ message: "Your feddback has been sent to the admin." });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  showAllQuery(req,res){
    queries
    .find()
    .populate('userid')
    .then(function (result) {
      res.status(200).json(result);
    })
    .catch(function (err) {
      res.status(500).json({ message: err });
    });
  }

  deleteQuery(req, res) {
    const pid = req.params.pid;

    queries
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
  
}

module.exports = userController;
