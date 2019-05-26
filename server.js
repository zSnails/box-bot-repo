const express = require('express');
const app = express();

let port = process.env.PORT || 8080;


app.use(express.static(__dirname));


app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, function() {
    console.log("App running.")
});
