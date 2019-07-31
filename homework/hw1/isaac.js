
const app = require('express')(); 
const port = 5000;

app.get('/', function(req,res){
    res.send('<h1>Hello, World!</h1><h2>My name is Isaac!</h2>');
});

app.listen(port, function(){
    console.log('Express網站正在監聽3000 port.');
});