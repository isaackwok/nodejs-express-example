const app = require('express')();
app.get('/', function(req,res){
    res.send('<h1>HELLO WORLD！</h1>');
});
app.listen(8080, function(){
    console.log('YES 8080PORT');
});