const express = require("express");
const router = express.Router(); ///function
const user = require("../models/user");
const tokenVerification = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const upload = require("../middleware/uploads");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const auth = new authController();
const token = tokenVerification.verifyUser;

//register api
router.post(
  "/user/add",
  // [
  //   check("firstname", "First Name must be entered").not().isEmpty(),
  //   check("lastname", "Last Name must be entered").not().isEmpty(),
  //   check("email", "Invalid Email").isEmail(),
  //   check("password", "You must enter your password").not().isEmpty(),
  //   check("phone", "Invalid Phone Number!!!").isMobilePhone(),
  //   check("address", "Address must be entered").not().isEmpty(),
  //   check("age", "Invalid age").isNumeric(),
  //   check("password", "it must be 8 to 16 length long").isLength({
  //     min: 8,
  //     max: 16,
  //   }),
  // ],
  upload.single('photo'),auth.register
);
router.post(
  "/user/add1",
  [
    check("firstname", "First Name must be entered").not().isEmpty(),
    check("lastname", "Last Name must be entered").not().isEmpty(),
    check("email", "Invalid Email").isEmail(),
    check("password", "You must enter your password").not().isEmpty(),
    check("phone", "Invalid Phone Number!!!").isMobilePhone(),
    check("address", "Address must be entered").not().isEmpty(),
    check("age", "Invalid age").isNumeric(),
    check("password", "it must be 8 to 16 length long").isLength({
      min: 8,
      max: 16,
    }),
  ],
    auth.register2
);

//login api call
router.post(
  "/user/login",
  [
    check("password", "You must enter your password").not().isEmpty(),
    check("email", "Invalid Email!!!").isEmail(),
    check("password", "it must be 8 to 16 length long").isLength({
      min: 8,
      max: 16,
    }),
  ],
  auth.login
);

module.exports = router;
