const profile = require('../models/profilemodel');
const user = require('../models/user')



class profileController {


    addProfileCustomer(req, res) {

        const projects = req.body.projects;
        const experience = req.body.experience;

        const addCustomerProfile = new profile({
            projects: projects, experience: experience,
        });
        addCustomerProfile.save()
            .then(function (result) {
                res.status(201).json({ message: "Profile has been added Sucessfully!!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }
    addProfileCompany(req, res) {
        const company = req.body.company;
        const foundedin = req.body.foundedin;
    }


    editProfileCompany(req, res) {

    }
    editProfileCustomer(req, res) {

    }

    showProfileCompany(req, res) {

    }
    showProfileCustomer(req, res) {

    }

}

module.exports = profileController