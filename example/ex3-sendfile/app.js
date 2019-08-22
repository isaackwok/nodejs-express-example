const app = require('express')();
let path = require('path');
const port = 5500; //定義port

//[GET] 根路徑
app.get('/',function(req,res){
    console.log("Recieved GET request on [/] path.");
    res.sendFile(path.join(__dirname, 'index.html')); //使用sendFile傳送html檔
});

//[GET] 路徑: /show
app.get('/show',function(req,res){
    console.log("Recieved GET request on [/show] path.");

    //使用ex2的query方式取得資料(從index.html的form submit後得來)
    let name = "Name: " + req.query.name;
    let studentID = "Student ID: " + req.query.studentID;
    let email = "E-mail: " + req.query.email;

    //處理輸出資料
    let br = '<br>';
    let information = name + br + email + br + email;

    //使用簡單的send回傳資料
    res.send("<h1>" + information + "</h1>");
});

app.listen(port,function(){
    console.log("Listening on " + port + " port.");
});