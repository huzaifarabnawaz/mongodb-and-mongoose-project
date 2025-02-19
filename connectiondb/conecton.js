const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTIONKEY);
        console.log('Connection successful');

    }
     catch (err) {
        console.error('Connection failed:', err);
    }
};


module.exports = { connectDB };
