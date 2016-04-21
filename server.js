var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.render('index', {title: 'fo'});
})

app.listen(3000, function(){
    console.log('server running on port 3000')
})