const exp = require('express')(); //let
var path = require('path');

exp.get('/',function(req,res){
    // res.send("我好棒");
    res.sendFile(path.join(__dirname, 'index.html'));
});

exp.listen(9487,function(){
    console.log("fish");
});