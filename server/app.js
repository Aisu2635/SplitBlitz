require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/connection");
const cors = require("cors");

app.use(cors({
    origin : "http://localhost:3000",
    methods : "GET, POST, PUT, DELETE",
    credentials : true
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

