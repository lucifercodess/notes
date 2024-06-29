const express = require('express');

const dotenv = require('dotenv');
const app = express();
dotenv.config();



app.get("/",(req,res)=>{
    res.send('api is working');
})

const PORT = process.env.PORT || 5100;
app.listen(PORT,()=>{
    console.log(`app is runnning on port ${PORT}`);
})