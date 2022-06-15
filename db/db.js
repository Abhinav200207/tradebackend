var mongoose = require('mongoose'); // Importing Mongoose


// this callback function will connect to database
const connectDatabase = () => {
    return mongoose.connect("mongodb+srv://Abhinav:abhinav123@nodejsproject.pwxex.mongodb.net/stocks?retryWrites=true&w=majority").then((data) => {
        console.log(`Connected to database data`) // log this statement if connection is successful
    })
}

module.exports = connectDatabase
