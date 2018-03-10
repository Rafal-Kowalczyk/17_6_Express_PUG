var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get('/', function(req, res) {
  	res.render("content", {
	    name: "App to Google"
	});
});

app.get('/auth/google', function(req, res) {
  	res.render("first-template", {
  		url: "http://www.google.com"
  	});
});


app.listen(3000);
app.use(function(req, res, next) {
  	res.status(404).send("Wybacz, nie mogliśmy odnaleź tego, czego żądasz!");
});