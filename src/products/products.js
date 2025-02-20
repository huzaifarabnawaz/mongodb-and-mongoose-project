const mongoose = require('../../connectiondb/conecton'); 
const productSchema = require('../../model/product');

const productApi = async (req, res) => {
  try {

    const product = await productSchema.create(req.body);
    console.log('check products', product);
    res.status(200).json({ payload: product });

  } catch (error) {
    console.log('Internal server error', error);
    throw error
  }
};

const getAllProduct=async(req,res)=>{
    try{
    const getAllProducts=await productSchema.find({})
    res.status(200).json({payload:getAllProducts})
    console.log('check all products',getAllProducts)
    }
    catch(error){
        console.log('internel server error',error)
        throw error
    }
}

module.exports = { productApi,getAllProduct};
