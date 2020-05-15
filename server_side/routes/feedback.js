var express = require("express");
var feed = express.Router();
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/hellopg",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const FeedbackModel = require("../model/feedbackmodel");


feed.post("/feed",async(req,res)=>{
    const feedback = new FeedbackModel({
  	name: req.body.name,
  	email: req.body.email,
  	subject: req.body.subject,
  	company: req.body.company,
  	message: req.body.message,
  	});
  try {
    await feedback.save();
    res.send(feedback);
  } catch (err) {
    res.status(500).send(err);
  }
  res.redirect("/")
});


module.exports=feed;