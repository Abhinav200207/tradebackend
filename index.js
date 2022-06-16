const express = require('express');
const connectDatabase = require('./db/db');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const product = require('./route/trade');
const user = require('./route/user');

app.use("", product)
app.use("",user)

connectDatabase();

app.listen(4000, () => {
    console.log(`Server is running on port: 4000`)
})