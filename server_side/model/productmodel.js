const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
 product:{
    type: String,
    required: true,
    trim: true,
 },
 description:{
    type: String,
    required: true,
    trim: true,
 },

  manage:{
    type: String,
    required: true,
  },

  order: {
    type: String,
    required: true
  },
  update: {
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true,
    trim: true,
 },
});


const pro = mongoose.model("pro", productSchema);
module.exports = pro;
