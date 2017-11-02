// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.enable('trust proxy')

app.get("/", function (request, response) {
  var regExp = /\(([^)]+)\)/;
var soft = regExp.exec(request.headers['user-agent'])[1];
  let ip = {"ip_address":request.ip, "language": request.headers["accept-language"].slice(0,5), "software": soft};
  response.send(ip);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
