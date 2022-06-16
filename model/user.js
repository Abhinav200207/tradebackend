const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = new mongoose.Schema({
    email: { type: String },
    password: { type: String }
});

User.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

User.methods.isPasswordMatched = async function (password) {
    return await bcrypt.compare(password, this.password);
}

User.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, "45645643afjuhjialkcsiuanomf6585451acyignhlmjca3546685agchukjjhk356846")
}

module.exports = mongoose.model("User", User);