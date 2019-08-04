const exp = require('express')(); //let

exp.get('/',function(req,res){
    res.send("我好棒");
});

exp.listen(9487,function(){
    console.log("fish");
});