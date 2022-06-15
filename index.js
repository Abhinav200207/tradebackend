const express = require('express');
const connectDatabase = require('./db/db');
const app = express();

app.use(express.json());

const product = require('./route/trade');

app.use("", product)

connectDatabase();

app.listen(4000, () => {
    console.log(`Server is running on port: 4000`)
})