const express=require('express')
const routes=express.Router()
const{productApi,getAllProduct,getById}=require('./products')

routes.post('/create',productApi)
routes.get('/getallproducts',getAllProduct)
routes.get('/:id',getById)


module.exports=routes 