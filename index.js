var express = require("express");
var http = require("http");

var app = express();

var port = process.env.PORT || 3000;
var key = process.env.STEAM_API_KEY;
var baseUrl = "api.steampowered.com";

app.get("/", function(req, res) {

	var fullData = "";
	console.log("Start");
	var x = http.get("http://" + baseUrl + "/ISteamWebAPIUtil/GetSupportedAPIList/V0001?key=" + key,function(innerRes){
	    console.log('STATUS: ' + innerRes.statusCode);
  		console.log('HEADERS: ' + JSON.stringify(innerRes.headers));
	    innerRes.on('data',function(data){
	        fullData += data;
	    });
	    innerRes.on("end", function() {
	    	SendJsonified(fullData, res);
	    });
	}).on("error", function(err) {
		console.log(err);
	});

});

app.listen(port, function() {
    console.log('App ready on port: ' + port);
});

function SendJsonified(json, res) {

	res.header("Access-Control-Allow-Methods", "GET, POST");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, *");
	app.set("json spaces",4);
	res.set("Content-Type","application/json");
	res.status(200);
	res.send(json);

}

function SendJson(json, res) {

	res.header("Access-Control-Allow-Methods", "GET, POST");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, *");
	app.set("json spaces",4);
	res.set("Content-Type","application/json");
	res.status(200);
	res.json(json);

}