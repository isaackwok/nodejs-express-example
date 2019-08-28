const app=require('express')();
let path=require('path');
const port=3000;
app.get('/',function(req,res){
    console.log("Recieved GET request on [/] path.");
    res.sendFile(path.join(__dirname, 'bmi.html')); 
});
app.get('/send',function(req,res){
	res.send("<h1>這是我的send分頁:D</h1>");

	
});

app.get('/show',function(req,res){
	var height=req.query.height;
	var weight=req.query.weight;
	height /=100;
	var bmi=weight/(height*height);
	let form = '<form method="GET" action="/"><input type="submit" value="回到首頁" /></form>';
	res.send("<h1 style='color:red'>你的BMI值 :"+bmi+"</h1>"+"<br/>"+form);
	
});
app.listen(port,function(){
	 console.log("Listening on " + port + " port.");
});