const mongoose = require('mongoose');

const trade = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    percentage: { type: Number }
});

module.exports = mongoose.model("trade", trade);