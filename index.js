const express = require('express');
const app = express();
const saveProducts=require('./src/products')

app.use(express.json());

app.use('/products',saveProducts)

app.listen(8000, () => {
    console.log('Port 8000 is running');
});
