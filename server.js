const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");

// Port details and connect function
const port = process.env.PORT || 2345;
const connect = require("./src/Config/db");

app.use(express.json());
app.use(cors());

// routers details
const ProductRouter = require("./src/Controllers/productControllers");
const UserRouter = require("./src/Controllers/userControllers");
// const RestaurantRouter = require("./Controllers/Restaurant.Controller");

// app.use("/restaurants/", RestaurantRouter);
app.use("/users/", UserRouter);
app.use("/products/", ProductRouter);


app.listen(port,  async() => {
    try{
        await connect();
        console.log(`Port 3422 is listening..`);
    }
    catch(err){
        console.log(err.message);
    }
})