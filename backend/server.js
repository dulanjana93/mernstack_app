const express = require('express');
const app= express();
const cors =require('cors');
const port=3001;
const host='localhost';
const mongoose=require('mongoose');
const router=require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://sirimath93:sirimath%40123@cluster0.r8diuku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';



const connect= async ()=>{
    try{
        await mongoose.connect(uri);
        console.log('connected to mongoDB');
    }
    catch(error){
        console.log('mongo error: ' , error);
    }
};

connect();

const server = app.listen(3001,'127.0.0.1',()=>{
    console.log(`server is running on port ${server.address().port}`);
});

app.use('/api',router);