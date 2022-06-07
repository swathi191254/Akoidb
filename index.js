const express = require('express');
const app = express();
require("dotenv").config();
var cors = require("cors");

const usersControllers = require('./src/Controllers/userControllers');


app.use(express.json());
app.use(cors())

app.use("/users",usersControllers);

module.exports = app;