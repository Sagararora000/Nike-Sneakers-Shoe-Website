const { subscribe } = require('diagnostics_channel');
const express = require('express');
const path = require('path');
const port = 8004;

const db = require('./config/mongoose');
const Subscribe = require('./models/subscribe');
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded()); //for database url-encoded payloads
app.use(express.static('assets'));

app.get('/',function(req,res){
    return res.render('nike');
})
app.post('/subscribe',function(req,res){
    console.log(req.body.email);
    Subscribe.create({
        email:req.body.email
    }).then((subscribe)=>{
        console.log(subscribe.email);
    })
    return res.redirect('back');
})
app.listen(port,function(err){
    if(err){
        console.log("there is an error in running the server",err);

    }
    console.log("server running on port:",port);
})

