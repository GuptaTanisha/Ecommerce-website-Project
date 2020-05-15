var express = require("express");
var blog = express.Router();
var ejs = require("ejs");
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/hellopg",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const blogmodel= require("../model/blogmodel");


blog.get("/b",async(req,res)=>{
	const data = await blogmodel.find({});  
  res.render("b",{data2 : data});
});

blog.post("/b",async(req,res)=>{
const blog=new blogmodel({
    title: req.body.title,
    content: req.body.content,
  });
console.log(req.body.title);
console.log(req.body.content);
  try {
   await blog.save();
    res.redirect('/b');
    console.log(blog);
  } catch (err) {
    res.status(500).send(err);
  }
});

blog.get("/dbblog",(req,res)=>{
const blog = blogmodel.find({},(err,data)=>{
  try{
    res.send(data);
  }
  catch(err)
  {res.send(err);}
});


});

module.exports=blog;