const user = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); //third party
const { check, validationResult } = require("express-validator");

class AuthController {
  register(req, res, next) {
    const errors = validationResult(req);
    //  console.log(errors.array())
    // if not empty
    if (!errors.isEmpty()) {
      res.status(400).json(errors.array());
    } else {
      //validation error free
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const password = req.body.password;
      const age = req.body.age;
      const address = req.body.address;
      const phone = req.body.phone;

      const photo = req.body.photo;
      const role = req.body.role;

      bcrypt.hash(password, 10, function (err, hash) {
        //console.log(hash)
        const me = new user({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: hash,
          age: age,
          address: address,
          phone: phone,
          age: age,
          role: role,
        });
        me.save()
          .then(function (Result) {
            //success insert
            res
              .status(201)
              .json({ message: "Registration sucessfull Done", success: true });
            console.log("Status-" + 201 + ": Registration sucessfull Done");
          })
          .catch(function (e) {
            res.status(500).json({ message: e });

            console.log("Status-" + 500 + e);
          });
      });
    }
  }

  login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    user
      .findOne({ email: email })
      .then(function (userData) {
        console.log(userData);
        if (userData === null) {
          return res
            .status(401)
            .json({
              message: "Inavalid!!! Email or Passwordkkkkk",
              success: false,
            });
          console.log("Status-" + 401 + ": Login unsucessfull");
        }
        bcrypt.compare(password, userData.password, function (err, result) {
          if (result === false) {
            return res
              .status(401)
              .json({
                message: "Inavalid!!! Email or Password",
                success: false,
              });
            console.log("Status-" + 401 + ": Login unsucessfull");
          }
          // username and password valid
          const token = jwt.sign({ userID: userData._id }, "secretkey");
          const id = userData._id;
          const useremail = userData.email;
          const role = userData.role;
          const firstname = userData.firstname;
          const lastname = userData.lastname;
          res.status(200).json({
            message: "Sucessfully LogIn ",
            token: token,
            success: true,
            id: id,
            email: useremail,
            firstName: firstname,
            lastName: lastname,
            role: role,
          });
          console.log("Status-" + 201 + ": Login sucessfully Done");
        });
      })
      .catch();
  }
}

module.exports = AuthController;
