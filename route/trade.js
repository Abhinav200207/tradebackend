var express = require('express');
const { initializeProduct, getTrade } = require('../controller/trade');

const router = express.Router(); // setting up route

router.route("/trade").post(initializeProduct).get(getTrade)

module.exports = router;