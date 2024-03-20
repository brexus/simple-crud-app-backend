const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node API Server updated on 2021-03-21");
});

// routes
app.use("/api/products", productRoute);

mongoose
    .connect(
        "mongodb+srv://admin:1aDGNcIUnMI0gz2D@backenddb.ax0nzfr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
    )
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.log("Connection failed!" + err);
    });
