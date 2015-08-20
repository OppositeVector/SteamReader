var express = require("express");

var app = express();

var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
	SendJson({victor: "Hi there !"}, res);
});

app.listen(port, function() {
    console.log('App ready on port: ' + port);
});

function SendJson(json, res) {

	res.header("Access-Control-Allow-Methods", "GET, POST");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, *");
	// res.header("Access-Control-Allow-Origin","*");
	// res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
	app.set("json spaces",4);
	res.set("Content-Type","application/json");
	res.status(200);
	res.json(json);

}