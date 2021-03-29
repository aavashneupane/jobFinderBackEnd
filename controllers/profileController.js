//const profile = require('../models/profilemodel');
const user = require('../models/user')



class profileController {


    addProfileCustomer(req, res) {
        const creator = req.user;
        const projects = req.body.projects;
        const experience = req.body.experience;

        const addCustomerProfile = new user({
            projects: projects, experience: experience,creator: creator
        });
        addCustomerProfile.save()
            .then(function (result) {
                res.status(201).json({ message: "Profile of customer has been added Sucessfully!!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })

    }

    addProfileCompany(req, res) {
        const creator = req.user;
        const company = req.body.company;
        const foundedin = req.body.foundedin;

        const addCompanyProfile = new user({
            company:company,foundedin:foundedin,creator: creator
        });
        addCompanyProfile.save()
            .then(function (result) {
                res.status(201).json({ message: "Profile of company has been added Sucessfully!!!" })
            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    }


    editProfileCompany(req, res) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const age = req.body.age;
        const address = req.body.address;
        const phone = req.body.phone;

        const company = req.body.company;
        const foundedin = req.body.foundedin;
         const id = req.body._id;
         console.log(req.body)
         user.findOneAndUpdate({_id:id},{firstname:firstname,lastname:lastname,age:age,address:address,phone:phone,company:company,foundedin:foundedin})
     
         .then(function(result){
             res.status(200).json({message: "Company detail has been updated sucessfully" })
         })
         .catch(function(e){
             res.status(500).json({message : e});
         })

    }
    editProfileCustomer(req, res) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const age = req.body.age;
        const address = req.body.address;
        const phone = req.body.phone;

        const projects = req.body.projects;
        const experience = req.body.experience;
         const id = req.body._id;
         console.log(req.body)
         user.findOneAndUpdate({_id:id},{firstname:firstname,lastname:lastname,age:age,address:address,phone:phone,projects:projects, experience:experience})
     
         .then(function(result){
             res.status(200).json({message: "Customer detail has been updated sucessfully" })
         })
         .catch(function(e){
             res.status(500).json({message : e});
         })

    }

    showProfileCompany(req, res) {
      
            const id = req.user;
            user.findOne({
                _id : id
            })
            .then(function(data){
                res.status(200).json(data);
            //    console.log(data._id);
            })
            .catch(function(e){
                res.status(500).json({message: e})
            })
      
    }
    showProfileCustomer(req, res) {
        const id = req.params.id;
        user.findOne({_id : id})
        .then(function(data){
            res.status(200).json(data);
        })
        .catch(function(e){
            res.status(500).json({message: e})
        })
    }

}

module.exports = profileController