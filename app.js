/**
 * Created by darivera on 5/3/2016.
 */
var express = require('express'),
    app = express();

app.use(express.static(__dirname+'/public'))
    .get('*', function(req, res){
        res.sendFile('/public/index.html', {root:__dirname});
    }).listen(8000);

console.log('http://localhost:8000');