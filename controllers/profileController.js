//const profile = require('../models/profilemodel');
const user = require("../models/user");

class profileController {
  addProfileCustomer(req, res) {
    const creator = req.user;
    const projects = req.body.projects;
    const experience = req.body.experience;

    const addCustomerProfile = new user({
      projects: projects,
      experience: experience,
      creator: creator,
    });
    addCustomerProfile
      .save()
      .then(function (result) {
        res
          .status(201)
          .json({
            message: "Profile of customer has been added Sucessfully!!!",
          });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  addProfileCompany(req, res) {
    const creator = req.user;
    const company = req.body.company;
    const foundedin = req.body.foundedin;

    const addCompanyProfile = new user({
      company: company,
      foundedin: foundedin,
      creator: creator,
    });
    addCompanyProfile
      .save()
      .then(function (result) {
        res
          .status(201)
          .json({
            message: "Profile of company has been added Sucessfully!!!",
          });
      })
      .catch(function (err) {
        res.status(500).json({ message: err });
      });
  }

  editProfileCompany(req, res) {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const address = req.body.address;
    const phone = req.body.phone;
    const photo = req.body.photo;
    const company = req.body.company;
    const foundedin = req.body.foundedin;
    const path = req.file.path;
    const id = req.params.id;
    console.log(req.body);
    user
      .updateOne(
        { _id: id },
        {
          firstname: firstname,
          lastname: lastname,
          age: age,
          address: address,
          phone: phone,
          photo: path,
          company: company,
          foundedin: foundedin,
        }
      )

      .then(function (result) {
        res
          .status(200)
          .json({ message: "Company detail has been updated sucessfully" });
        console.log("updated" + result.age);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
        console.log("unsuccessfull" + e);
      });
  }

  editResume(req, res) {
    if (req.file == undefined) {
      return res.status()
    }
    // const path = req.file.path;
    const resume = req.file.path;
    const id = req.params.id;

    user
      .findByIdAndUpdate(
        { _id: id },
        {
          resume: resume,
        }
      )

      .then(function (result) {
        res
          .status(200)
          .json({ message: "Resume has been updated sucessfully" });
        console.log("Updated?");
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  editPicture2(req, res) {
    if (req.file == undefined) {
      return res.status()
    }
    const path = req.file.path;
    const id = req.params.id;
    user
      .findByIdAndUpdate(
        { _id: id },
        {
          photo: path,
        }
      )

      .then(function (data) {
        res
          .status(200)
          .json({ success: true, data });
        console.log("Updated?");
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  editProfileCustomer(req, res) {
    // if (req.file == undefined) {
    //   return res.status()
    // }
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const address = req.body.address;
    const phone = req.body.phone;
    // const path = req.file.path;
   // const resume = req.file.path;
    const projects = req.body.projects;
    const experience = req.body.experience;
    const userbio = req.body.userbio;
    const id = req.params.id;

    user
      .findByIdAndUpdate(
        { _id: id },
        {
          firstname: firstname,
          lastname: lastname,
          age: age,
          address: address,
          phone: phone,
          // photo: path,
      //    resume: resume,
          userbio: userbio,
          projects: projects,
          experience: experience,
        }
      )

      .then(function (result) {
        res
          .status(200)
          .json({ message: "Customer detail has been updated sucessfully" });
        console.log("Updated?");
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }


  editProfileCustomer2(req, res) {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const address = req.body.address;
    const phone = req.body.phone;
    const projects = req.body.projects;
    const experience = req.body.experience;
    const userbio = req.body.userbio;
    const id = req.params.id;

    user
      .findByIdAndUpdate(
        { _id: id },
        {
          firstname: firstname,
          lastname: lastname,
          age: age,
          address: address,
          phone: phone,
            userbio: userbio,
          projects: projects,
          experience: experience,

        }
      )

      .then(function (data) {
        res
          .status(200)
          .json({ success: true,message:"Updated Sucessfully", data });
        console.log("Updated?");
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }


  showProfileCompany(req, res) {
    const id = req.user;
    user
      .findOne({
        _id: id,
      })
      .then(function (data) {
        res.status(200).json(data);
        //    console.log(data._id);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }
  showProfileCustomer(req, res) {
    const id = req.user;
    user
      .findOne({ _id: id })
      .then(function (data) {
        res.status(200).json({success: true,data});
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }

  showProfileCustomer2(req, res) {
    const id = req.user;
    user
      .findOne({ _id: id })
      .then(function (data) {
        res.status(200).json(data);
      })
      .catch(function (e) {
        res.status(500).json({ message: e });
      });
  }


}

module.exports = profileController;
