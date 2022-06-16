var express = require('express');
const { isAuthenticated } = require('../auth');
const { logoutUser, register, login, loadUser } = require('../controller/user');

const router = express.Router(); // setting up route

router.route("/user/login").post(login)
router.route("/user/logout").get(logoutUser)
router.route("/user/register").post(register)
router.route("/user/myProfile").get(isAuthenticated,loadUser)

module.exports = router;