const express = require("express");
const router = express.Router(); ///function
const user = require("../models/user");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const query = new userController();
const auth = require("../middleware/auth");

router.post("/addQuery",auth.verifyUser,query.addQuery);
router.post("/addQuery1/",query.addQuery);

router.get("/showAllQuery/",query.showAllQuery);

router.delete(
    "/query/delete/:pid",
 
    query.deleteQuery
  );


module.exports = router;
