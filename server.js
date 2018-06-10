// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up the Express App
var app = express();
var PORT = 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Basic route that send the user to the first AJAX Page
app.get("/", function(req, res) {
  console.log("success")
  res.sendFile(path.join(__dirname, "./app/public/home.html"))
})

//Basic route to go to the reserve page
app.get("/survey", function(req, res) {
  res.sendFile(path.json(__dirname, "./app/public/survey.html"))
})


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  