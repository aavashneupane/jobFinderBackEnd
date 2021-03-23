const express = require('express');
const router = express.Router();///function 
const {check,validationResult,} = require('express-validator');
const auth = require('../middleware/auth'); 





const profileController = require('../controllers/profileController');
const profile = new profileController();



///////////////for user profile////////
router.post('/profile/addCustomer',[
    check('projects',"Project must be entered").not().isEmpty(),
    check('experience',"Experience must be entered").not().isEmpty(),
],auth.verifyUser,profile.addProfileCustomer)


module.exports = router;