var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {
    //Basic route that send the user to the first AJAX Page
    app.get("/", function(req, res) {
        console.log("success")
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })

    //Basic route to go to the reserve page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

}
