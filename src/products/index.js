const express=require('express')
const routes=express.Router()
const{productApi,getAllProduct}=require('./products')

routes.post('/create',productApi)
routes.get('/getallproducts',getAllProduct)


module.exports=routes 