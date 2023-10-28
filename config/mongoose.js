//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/subscribe_mails');

//acquire the connection(to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',function(err){
    console.log(err.message);
})

//up and running then print the message
db.once('open',function(){
    console.log("successfully connected to the database");
})