const express = require('express');
const app = express();

let port = process.env.PORT || 8080;


app.user(express.static(__dirname));


app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log("App running.")
});