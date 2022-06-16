var express = require('express');
const { initializeProduct, getTrade } = require('../controller/trade');
const {isAuthenticated} = require('../auth')

const router = express.Router(); // setting up route

router.route("/trade").post(isAuthenticated,initializeProduct).get(isAuthenticated, getTrade)

module.exports = router;