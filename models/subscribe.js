//require the library
const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
 
    email: {
        type: String,
        required: true
    }
})

const Email = mongoose.model('Email',subscribeSchema); //emails shown in mongoDB because of 

module.exports = Email;