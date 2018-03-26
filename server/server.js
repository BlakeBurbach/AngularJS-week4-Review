const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

const mongoose = require('mongoose');
const databaseURL = 'mongodb://localhost:27017/hadar'

mongoose.connect(databaseURL);
mongoose.connection.on('connected', ()=>{
    console.log('This pleases the mongod');
});

mongoose.connection.on('error', ()=>{
    console.log('The mongod is not pleased');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.listen(PORT, (req, res)=>{
    console.log(`Server running on ${PORT}`);
});