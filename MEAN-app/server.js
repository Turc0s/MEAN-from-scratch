
// Importing modules
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

var app = express();

const route = require("./routes/route");

// port no.
const port = 3000;

// adding middleware - cors
app.use(cors());

// body-parser
app.use(bodyParser.json());

// static files
app.use(express.static(path.join(__dirname, "dist")));

// routes 
app.use("/api", route);

// testing server
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("Server started at port: " + port);
});
