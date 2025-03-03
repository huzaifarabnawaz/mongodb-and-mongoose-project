const express=require('express')
const routes=express.Router()
const{productApi,getAllProduct,getById, updateById}=require('./products')

routes.post('/create',productApi)
routes.get('/getallproducts',getAllProduct)
routes.get('/:id',getById)
routes.patch('/:id',updateById)


module.exports=routes 