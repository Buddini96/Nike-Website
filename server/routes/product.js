const express = require('express');
const Product = require('../model/product');

const router = express.Router();

//Save product

// router.post('/save', (req,res) => {
//     let newProduct = new Product(req.body);
//
//     newProduct.save((err) => {
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:"Product Saved Successfully"
//         });
//     });
// });

// const schemaData = mongoose.Schema({
//     id : Number,
//     name : String,
//     price : Number,
//     currency : String,
//     image : String,
// },{
//     timeStamp : true
// })
// router.post('/save', async (req,res) => {
//     console.log(req.body);
//     const data = new Product(req.body);
//     await data.save();
//     res.send({success : true, message : "data save successfully"});
// });

module.exports = router;

//
// const express = require('express');
// const Product = require('../model/product');
//
// const router = express.Router();

// Save product
// router.post('/product/save', async (req, res) => {
//     try {
//         const newProduct = new Product(req.body);
//         await newProduct.save();
//         return res.status(200).json({
//             success: "Product Saved Successfully"
//         });
//     } catch (error) {
//         return res.status(400).json({
//             error: error.message || "An error occurred while saving the product."
//         });
//     }
// });
//
// module.exports = router;
