const express = require('express');
const app = express();
const mongoose = require('mongoose');
var mongoClient = require('mongodb');
const User = require('./models/User');
const bodyParser = require('body-parser');
const path = require('path');

var url = 'mongodb://localhost:27017/userDB';
mongoClient.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

app.set('views', './views');
app.set('view engine', 'ejs');
//app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    res.render('index');
})

app.get('/login', function(req, res){
    res.render('login');
})

app.post('/login', function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, (err, foundResults) => {
        if(err)
        {
            console.log(err);
        }
        else{
            if(foundResults.password === password){
                res.sendFile(path.join(__dirname+'/Pages/Project.html'));
                res.sendFile(path.join(__dirname+'/Pages/ProjectStyle.css'));
            }
            else{
                res.send("Wrong email or password");
            }
        }
    })
})

app.get('/register', function(req, res){
    res.render('register');
})

app.post('/register', function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const nweUser = new User({
        email: email,
        password: password
    })

    nweUser.save((err) => {
        if(err) console.log(err);

        res.send("Successfully Created User");
    })
})

app.get('/Home',function(req,res){
    res.sendFile(path.join(__dirname+'/Pages/Project.html'));
    res.sendFile(path.join(__dirname+'/Pages/ProjectStyle.css')); 
  });
  
app.get('/food',function(req,res){
    res.sendFile(path.join(__dirname+'/Pages/food.html'));
});
app.get('/parking',function(req,res){
    res.sendFile(path.join(__dirname+'/Pages/index.html'));
});

app.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/Pages/Contact.html'));
});

app.listen(8000)