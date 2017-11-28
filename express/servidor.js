var express = require('express');
var app = express();

app.get('/', home);
app.get('/acercade', acercade);

app.use(express.static("public"));
app.use("/static", express.static("public"));

function home(req, res){
  res.sendFile(__dirname + "/home.html");
}

function acercade(req, res){
  res.send('acerca de');
}

app.listen(3000);

//console.log("Servidor express escuchando");
