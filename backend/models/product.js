// mongoDB schema :
 const mongoose = require("mongoose");
 
const productSchema = new mongoose.Schema({
    productName:{ type:String },
    productCreator:{ type:String },
    productTitle:{ type:String },
    productDescription:{ type:String },
    productPrice:{type:Number},
    productRating:{type:Number}
})
module.exports = mongoose.model("products",productSchema )