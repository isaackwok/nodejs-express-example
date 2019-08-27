const app = require('express')(); 
var http = require('http').createServer(app);

app.get('/', function(req,res){
    res.send('<h1>Hello！</h1>');
});

app.listen(process.env.PORT || 3000, function(){

    console.log('Express網站正在監聽3000 port.');
});