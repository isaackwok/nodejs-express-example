/*
    1.與java的import一樣，匯入Express套件，並馬上呼叫建構子
    因此app變數已存放Express物件，可進行各種操作
    撰寫javascript時，建議使用const(java的final) 及 let(任何變數型態)來宣告變數
    以var宣告變數的方式雖然還能用，但已經過時了，也不安全
*/
const app = require('express')(); 
//-------------我是分隔線----------------

//指定app要聆聽的路徑，'/'為根目錄
//在這匿名函數裡,req是request(請求)，res是response(回應)
app.get('/', function(req,res){

    //若使用者進入此路徑，回傳以下的response
    //透過res物件傳送回應
    res.send('<h1>Hello, 親愛的學弟妹們！</h1>');
});
//-------------我是分隔線----------------

/*
    把app佈置在3000 port上
    電腦上有很多應用程式在執行，各自都會佔用不同的port
    哪些port被哪些應用程式佔用，可以去wiki查
    通常我們寫web,會使用3000/5000/8080 port，幾乎不會跟其他程式有衝突
    喜歡的話也可以自行決定port,也可以用9487
*/
app.listen(3000, function(){

    //在主控台(cmd)列印訊息
    console.log('Express網站正在監聽3000 port.');
});
//-------------我是分隔線----------------

//本範例的網址是: localhost:3000 或 127.0.0.1:3000