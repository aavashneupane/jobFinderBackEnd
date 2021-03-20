const express = require('express');
const SignUpController = require('../controller/authController/signupController');
const SignInController = require('../controller/authController/signinController');
const SignOutController = require('../controller/authController/signOutController');

const jobController = require('../controller/createJob');

const checkAuth = require("../middleware/auth");

const apirouter = express.Router();

// auth requests
apirouter.post('/sign-up', SignUpController.registerUser);
apirouter.post('/sign-in', SignInController.signIn);
apirouter.post('/sign-out', checkAuth, SignOutController.signOut);
module.exports = apirouter;

//job requests
apirouter.post('/addjob', checkAuth, jobController.newJob);
