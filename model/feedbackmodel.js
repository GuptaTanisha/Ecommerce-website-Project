const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
 name:{
    type: String,
    required: true,
    trim: true,
 },
 email:{
    type: String,
    required: true,
    trim: true,
 },
  subject:{
    type: String,
    required: true,
    trim: true,
 },

  company:{
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true
  },
  
});


const feede = mongoose.model("feede", feedbackSchema);
module.exports = feede;
