var express = require("express");
var ejs = require("ejs");
var body = require("body-parser");
var route = require("./routes/routes");
var auth = require("./routes/authenticate");
var app =express();
app.use(express.urlencoded());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("./views/css",express.static(__dirname + "./views/css"));
app.use(route);
app.use(auth);

// app.post("/admin",(req,res)=>{
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
 
app.listen(process.env.PORT || 3000);
console.log("SERVER RUNNING");