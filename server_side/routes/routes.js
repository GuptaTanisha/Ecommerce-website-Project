var express = require("express");
var router = express.Router();

router.get("/login",(req,res)=>{
	res.render("login");
});

router.get("/wishlist",(req,res)=>{
	res.render("wishlist");
});

router.get("/admin",(req,res)=>{
	res.render("admin");
});

router.get("/",(req,res)=>{
	res.render("index");
});
router.get("/about_us",(req,res)=>{
	res.render("about_us");
});
router.get("/blog-archive-2",(req,res)=>{
	res.render("blog-archive-2");
});
router.get("/blog-single",(req,res)=>{
	res.render("blog-single");
});
router.get("/cart",(req,res)=>{
	res.render("cart");
});
router.get("/checkout",(req,res)=>{
	res.render("checkout");
});
router.get("/contact",(req,res)=>{
	res.render("contact");
});
router.get("/global",(req,res)=>{
	res.render("global");
});

router.get("/signup",(req,res)=>{
	res.render("signup");
});


module.exports=router;