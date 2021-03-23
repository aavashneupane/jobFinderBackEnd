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

router.post('/profile/addCompany',[
    check('company',"Name must be entered").not().isEmpty(),
    check('foundedin',"Date must be entered").not().isEmpty(),
],auth.verifyUser,profile.addProfileCompany)

router.get('/profile/:id',auth.verifyUser,  profile.showProfileCompany);
router.get('/profile/:id',auth.verifyUser,  profile.showProfileCustomer);

router.put('/profile/editProfileCompany',[
    check('company',"Name must be entered").not().isEmpty(),
    check('foundedin',"Date must be entered").not().isEmpty(),
],auth.verifyUser,profile.editProfileCompany)

router.put('/profile/editProfileCustomer',[
    check('projects',"Project/s must be entered").not().isEmpty(),
    check('experience',"Experience must be entered").not().isEmpty(),
],auth.verifyUser,profile.editProfileCustomer)


module.exports = router;