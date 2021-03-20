const express = require('express');
const SignUpController = require('../controller/authController/signupController');
const SignInController = require('../controller/authController/signinController');

const apirouter = express.Router();

// auth requests
apirouter.post('/sign-up', SignUpController.registerUser);
apirouter.post('/sign-in', SignInController.signIn);
module.exports = apirouter;
