const express = require("express");
const mongoose = require("mongoose");
const products = require("../models/product")

const router = express.Router();  

//get all the products -> get
router.get("/",async(req,res)=>{
    try{
       const getAllProducts = await products.find();
       res.status(200).json(getAllProducts)
    }
    catch(error){
     console.log(error.message);
     res.send(404).json({errorInfo:"No products are seen"/error.messsage})
    }
})
//get single product -> get 
router.get("/:id", async(req,res)=>{
  const {id} = req.params
  try{
   const getSingleProduct =await products.findById(id)
   res.status(200).json(getSingleProduct) 
  }
   catch(error){
     console.log(error.message);
      res.status(404).json({errorInfo:"No products are seen"/error.messsage})
   }
})
//create a single product -> post
router.post("/",async(req,res)=>{
    const {productName,productCreator,productTitle,productDescription,productPrice,productRating} = req.body;
    const newlyCreatedProduct = new products({productName,productCreator,productTitle,productDescription,productPrice,productRating});
    try{
       await newlyCreatedProduct.save();
       res.status(201).json(newlyCreatedProduct)
    }
    catch(error){
        console.log(error.message);
        res.status(409).json({errInfo:error.message})
    }
})
//update a single product -> patch
router.patch("/:id",async(req,res)=>{
   const {id} = req.params;
   const {productName,productCreator,productTitle,productDescription,productPrice,productRating} = req.body; 
   try{
     if(!mongoose.Types.ObjectId.isValid(id)){
      res.status(404).send(`No product is seen with this id : ${id} !Please try again .`)
     }
     const updatedProduct = {productName,productCreator,productTitle,productDescription,productPrice,productRating ,_id:id};
     await products.findByIdAndUpdate(id,updatedProduct ,{new:true});
     res.status(200).json({message:`Product is updated successfully`})
   }catch(error){
     console.log(error.message);
     res.status(404).json({errInfo:error.message})
   }
})
//delete a single product -> delete
router.delete("/:id",async(req,res)=>{
  const {id} = req.params;
  try{
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).send(`Product is not found with this id :${id} ! Please try again .`)
    }
    await products.findByIdAndDelete(id)
    res.status(200).json({message:`Product is deleted successfully`})
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({errInfo:error.message})
  }
})

module.exports = router;