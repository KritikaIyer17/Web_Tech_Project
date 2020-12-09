const mongoose = require('mongoose');
const mongoClient = require('mongodb');

var url = 'mongodb://localhost:27017/userDB';
mongoose.connect(url);

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);