const req = require('express/lib/request');
const mongoose = require('../../connectiondb/conecton');
const productSchema = require('../../model/product');
const res = require('express/lib/response');

const productApi = async (req, res) => {

  try {


    const product = await productSchema.create(req.body);

    res.status(200).json({ payload: product });

  }
  catch (error) {
    console.log('Internal server error', error);
    throw error
  }

};


const getAllProduct = async (req, res) => {

  try {
    const getAllProducts = await productSchema.find({})

    res.status(200).json({ payload: getAllProducts })

  }
  catch (error) {
    console.log('internel server error', error)
    throw error
  }

}


const getById = async (req, res) => {

  try {

    const { id } = req.params

    const getProductsById = await productSchema.findById(id)

    res.status(200).json({ payload: getProductsById })

  }
  catch (error) {
    console.log('internel server error', error)
    throw error
  }

}

const updateById = async (req, res) => {
  try {

    const { id } =req.params

    if (!id) {
      return res.status(400).json({ msg: 'id not found' })
    }

    const updated = await productSchema.findByIdAndUpdate(id, req.body)

    const updatedProducts=await productSchema.findById(id)
  
    return res.status(200).json({payload:updatedProducts})

  }
  catch (error) {
    console.log('internel server error ', error)
    throw error
  }
}


const deleteProduct=async(req,res)=>{
  
  const {id}=req.params

  const checkId=await productSchema.findById(id)

  if(!checkId){
    return res.status(400).json({msg:"product not found"})
  }

  const deleteQuery=await productSchema.findByIdAndDelete(id)
  console.log('check delete response',deleteQuery)
  return res.status(200).json({payload:deleteQuery})

}



module.exports = { productApi, getAllProduct, getById ,updateById,deleteProduct};
