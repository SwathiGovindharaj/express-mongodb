const express = require("express");

const { userSignUp, userLogin } = require("../controllers/user.controller");

const router = express.Router();

router.route("/signup").post(userSignUp);
router.route("/login").post(userLogin);

module.exports = router;
