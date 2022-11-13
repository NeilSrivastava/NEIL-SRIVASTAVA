const express = require('express');

const app = express();
app.use(express.static('public'));

app.listen(8080);
// localhost:8080
app.get('/',function(req,res){
    res.sendFile(_dirname + '/index.html')
    //Status: 200(ok)
    res.sendStatus(200);
});