let app = require('express')();

app.get('/',function(req,res){
    res.send('Hello');
});

app.listen(process.env.PORT || 5000,function(){
    console.log("Listening on " + port + " port.");
});