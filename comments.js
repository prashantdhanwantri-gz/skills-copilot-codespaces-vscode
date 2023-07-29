// Create web server
var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 3000;
// Set up views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Set up static files
app.use(express.static(path.join(__dirname, "public")));
// Create routes
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/member", function(req, res)   {
    res.render("member");
}   );
