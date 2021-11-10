const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Roast = require('./roast_model.js');


const connectDB = (roast) => {
    const dbURI = "mongodb+srv://Aaryadev:aurora1127@cluster0.jvar5.mongodb.net/bhau-cluster?retryWrites=true&w=majority"
    mongoose.connect(dbURI).then((result)=>{
        console.log('connected to mongodb cluster')
    }).catch((err) => console.log(err));

    console.log('roast received in mongodb connect function is ' + roast);
    saveRoast(roast);
}

const saveRoast = async (roast) => {
    const new_roast = new Roast({Roast: roast});
    await new_roast.save();
}

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());

app.listen(8080);

app.post('/givemedata', (req, res) => {

    const roast = req.body.Roast; // req.body is a json object and we're just extracting "Roast" from the json object received
    console.log(roast);
    res.sendStatus(200);

    //connecting to the mongodb database
    connectDB(roast);
})
