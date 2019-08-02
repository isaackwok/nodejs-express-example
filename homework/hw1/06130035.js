var express=require("express");
var app=express();
app.get("/",function(req,res){
 res.send('<h1>Hello,world!</h1><h2>My name is peiting</h2>');
});
app.listen(3000,function(){
console.log("localhost is open http://localhost:3000/");
});
