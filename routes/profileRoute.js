const express = require("express");
const router = express.Router(); ///function
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const profileController = require("../controllers/profileController");
const profile = new profileController();

///////////////for user profile////////
router.post(
  "/profile/addCustomer",
  [
    check("projects", "Project must be entered").not().isEmpty(),
    check("experience", "Experience must be entered").not().isEmpty(),
  ],
  auth.verifyUser,
  auth.verifyCustomer,
  profile.addProfileCustomer
);

router.post(
  "/profile/addCompany",
  [
    check("company", "Name must be entered").not().isEmpty(),
    check("foundedin", "Date must be entered").not().isEmpty(),
  ],
  auth.verifyUser,
  auth.verifyCompany,
  profile.addProfileCompany
);

router.get(
  "/profile1",
  auth.verifyUser,
  auth.verifyCompany,
  profile.showProfileCompany
);
router.get(
  "/profile2",
  auth.verifyUser,
  auth.verifyCustomer,
  profile.showProfileCustomer
);

router.put(
  "/profile/editProfileCompany",
  [
    check("company", "Name must be entered").not().isEmpty(),
    check("foundedin", "Date must be entered").not().isEmpty(),
  ],
  auth.verifyUser,
  auth.verifyCompany,
  profile.editProfileCompany
);

router.put(
  "/profile/editProfileCustomer",
  [
    check("projects", "Project/s must be entered").not().isEmpty(),
    check("experience", "Experience must be entered").not().isEmpty(),
  ],
  auth.verifyUser,
  auth.verifyCustomer,
  profile.editProfileCustomer
);

module.exports = router;
