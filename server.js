const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose')
//const ObjectId = require('mongodb').ObjectId   -- just in case we need it

//defines our new database
const newDataBase = mongoose.connection;

//adds event listeners to newDataBase
newDataBase.on('error', (err)=>{console.log('Something went wrong:',err)});
newDataBase.once('open', ()=>{console.log('Connected...')})

//sets up use of server
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//handle post request
app.post('/newitem', postItem)
//handle get request
app.get('/getitems', getItems)
//handle delete request
app.post('/deleteitem', deleteItem)

async function postItem(req, res) {

    //write this function

}

async function getItems(req, res) {

    //write this function

}

async function deleteItem(req, res) {

    //write this function
    
}

//serves our single page app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
//sets server to listen on defined port
app.listen(port, () => { console.log(`Listening on port: ${port}`) });