const exp = require('express')(); 
// const moment = require ('moment');
// const tz = require('moment-timezone');
let path = require('path');
const port = 9487; 

exp.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

exp.get('/show',function(req,res){
    // var start_date = new Date (req.query.start_date);
    // var end_date = new Date (req.query.end_date);
    // var end_time = new Date (req.query.end_time).getTime;
    // var day=(end_date-start_date)/86400000;

    let array_start_date = req.query.start_date.split("-");
    let array_start_time = req.query.start_time.split(":");
    let array_end_date = req.query.end_date.split("-");
    let array_end_time = req.query.end_time.split(":");
    console.log(array_start_date);
    console.log(array_start_time);
    console.log(array_end_date);
    console.log(array_end_time);
    let start = new Date(array_start_date[0],array_start_date[1],array_start_date[2],array_start_time[0],array_start_time[1],0);
    let end = new Date(array_end_date[0],array_end_date[1],array_end_date[2],array_end_time[0],array_end_time[1],0);
    // let start = new Date(req.query.start_date+'T'+req.query.start_time+':00');
    // let end = new Date(req.query.end_date+'T'+req.query.end_time+':00');

    console.log(start.toString());
    console.log(end.toString());

    let day = Math.round(Math.abs((end - start)/86400000));
    let hour = Math.round(Math.abs(((end - start)%86400000)/ 3600000));
    let minute = Math.abs(((end - start)%86400000)% 3600000/ 60000);



    console.log((end - start)%86400000);
    // var start_date_Array = new Array();
    // start_date_Array = req.query.start_date.split("-");
    // var start_year = start_date_Array[0];
    // var start_month = start_date_Array[1];
    // var start_day = start_date_Array[2];
     let form = '<form method="GET" action="/"><input type="submit" value="回到首頁" /></form>';
     res.send("<h1 style='color:red'>時間相差計算 :"+day+"天"+hour+"時"+minute+"分"+"</h1>"+"<br/>"+form);
   // res.sendFile(path.join(__dirname, 'show.html'));
    // res.json({day:day});
    // res.send(document.getElementsByName("day").values=day+"天");
    // console.log(end_time);
});

exp.get('/two',function(req,res){
    let form = '<form method="GET" action="/"><input type="submit" value="回到首頁" /></form>';
    res.send("<h1 style='color:red'>這是第二個分頁</h1>"+"<br/>"+form);
});


exp.listen(port,function(){
    console.log("Listening on " + port + " port.");
});