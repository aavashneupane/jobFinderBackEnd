const express = require('express');
const SignUpController = require('../controller/authController/signupController');

const apirouter = express.Router();

// auth requests
apirouter.post('/sign-up', SignUpController.registerUser);
module.exports = apirouter;
