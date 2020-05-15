var express = require("express");
var product = express.Router();
var mongoose = require("mongoose");
var passport = require('passport');
var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;
mongoose.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

// product.post("/admin",(req,res)=>{
//   const prod = new ProductModel({
//   	product: ,
//   	description: ,
//   	manage: ,
//   	order: ,
//   	update: ,
//   	status: ,
//   });
//   try {
//     await prod.save();
//     res.send(prod);
//   } catch (err) {
//     res.status(500).send(err);
//   }
//   res.redirect("/")
// });

const UserModel = require("../model/usermodel");
const ProductModel = require("../model/productmodel");


module.exports=product;