const app = require('express')();

//localhost:3000
app.get('/', function(req,res){
    res.send('<h1>Hello, 親愛的學弟妹們！</h1>');
});

//localhost:3000/morning
app.get('/morning', function(req,res){
    res.send('<h1>早安, 親愛的學弟妹們！</h1>');
});

//localhost:3000/afternoon
app.get('/afternoon', function(req,res){
    res.send('<h1>午安, 親愛的學弟妹們！</h1>');
});

//localhost:3000/evening
app.get('/evening', function(req,res){
    res.send('<h1>晚安, 親愛的學弟妹們！</h1>');
});

//localhost:3000/ta_is_handsome?name={你的名字}&age=22
//這比較特別，有套用query string(常常在網址後看到 >>> name=郭俊豪&age=22)
app.get('/ta_is_handsome', function(req,res){
    let name = req.query.name; //透過request的query取得name的字串
    let age = req.query.age;//透過request的query取得age的數值
    res.send('<h1>' + name + ' 說 ' + age + '歲的TA很帥！</h1>');
});

app.listen(3000, function(){
    console.log('Express網站正在監聽3000 port.');
});

//-------------我是分隔線----------------

//本範例的網址是: localhost:3000 或 127.0.0.1:3000