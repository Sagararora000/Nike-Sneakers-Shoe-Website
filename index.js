const express = require('express');
const path = require('path');
const port = 8004;
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',function(req,res){
    return res.render('nike');
})
app.listen(port,function(err){
    if(err){
        console.log("there is an error in running the server",err);

    }
    console.log("server running on port:",port);
})

