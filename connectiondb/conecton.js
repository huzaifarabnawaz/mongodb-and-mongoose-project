const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
       const connection= await mongoose.connect(process.env.CONNECTIONKEY,)
        console.log('ongoDB Connected ✅');
    } catch (err) {
        console.error('Connection failed ❌:', err);
    }
};

connectDb();



module.exports = mongoose;
