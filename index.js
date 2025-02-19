const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {connectDB}=require('./connectiondb/conecton')

app.use(express.json());


app.listen(8000, () => {
    console.log('Port 8000 is running');
});
