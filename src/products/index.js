const express=require('express')
const router=express.Router()
const{productApi,getAllProduct,getById, updateById,deleteProduct}=require('./products')


router.post('/create',productApi)
router.get('/getallproducts',getAllProduct)
router.get('/:id',getById)
router.put('/:id',updateById)
router.delete('deleteproduct/:id',deleteProduct)

module.exports=router 