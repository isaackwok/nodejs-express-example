const express = require('express');
const app = express();
let path = require('path');
const port = 3000; 

//定義static目錄，以使用靜態檔案
app.use(express.static('public'));

//[GET] 根路徑
app.get('/',function(req,res){
    console.log("Recieved GET request on [/] path.");
    res.sendFile(path.join(__dirname, 'index.html')); 
});

//[GET] 路徑: /show
app.get('/show',function(req,res){
    console.log("Recieved GET request on [/show] path.");

    let name = "Name: " + req.query.name;
    let studentID = "Student ID: " + req.query.studentID;
    let email = "E-mail: " + req.query.email;

    let br = '<br>';
    let information = name + br + studentID + br + email;
    let form = '<form method="GET" action="/"><input type="submit" value="回到首頁" /></form>';
 
    res.send("<h1>" + information + "</h1>" + form);
});

app.post('/test', function(req,res){
    console.log("Recieved POST request on [/test] path.");
    res.send("<h1>This is POST.</h1>");
});

app.delete('/test', function(req,res){
    console.log("Recieved POST request on [/test] path.");
    res.send("<h1>This is DELETE.</h1>");
});

app.put('/test', function(req,res){
    console.log("Recieved POST request on [/test] path.");
    res.send("<h1>This is TEST.</h1>");
});

app.listen(process.env.PORT || port,function(){
    console.log("Listening on " + port + " port.");
});