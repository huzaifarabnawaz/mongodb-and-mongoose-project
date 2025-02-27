const express = require('express');
const app = express();
const mainproducts=require('./src/products')

app.use(express.json());

app.use('/products',mainproducts)

app.listen(8000, () => {
    console.log('Port 8000 is running');
});
