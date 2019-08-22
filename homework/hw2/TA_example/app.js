const app = require('express')();
let path = require('path');
const port = 5500; 

//[GET] 根路徑
app.get('/',function(req,res){
    console.log("Recieved GET request on [/] path.");
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port,function(){
    console.log("Listening on " + port + " port.");
});